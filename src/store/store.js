import create from "zustand";
import {SPAM, INBOX, FOLDERS} from "./data";

export const useStore = create((set, get) => ({
    spam: SPAM,
    inbox: INBOX,
    folders: FOLDERS.map(folder=>{
        return {
            ...folder,
            unread: folder.linkedTo.reduce((acc, mail)=>{
                return acc + (mail.unread?1:0)
            },0)
        }
    }),
    deleted: [],
    isDeleted: false,
    currentActive: INBOX,
    mailContent: null,
    deleteMessage: (messageId) => set(state=>{
        const newDeleted = [...state.deleted, state.currentActive.find(mail=>mail.mId === messageId)]
        const inbox = state.inbox.filter((m)=>m.mId !== messageId);
        const spam = state.spam.filter((m)=>m.mId !== messageId);
        const newCurrentActive = state.currentActive.filter((m)=>m.mId !== messageId);

        if(newCurrentActive.length === 0){
            set({mailContent: null})
        }
        const folders = state.folders.map((folder)=>{
            const updatedLinkedTo = folder.linkedTo.map((m)=>{
                if(m.mId === messageId){
                    m.unread = false;
                }
                return m;
            })
            return {
                ...folder,
                unread: updatedLinkedTo.reduce((acc, mail)=>{
                    return acc + (mail.unread?1:0)
                }
                ,0)
            }
        })
        return {
            deleted: newDeleted,
            inbox,
            spam,
            currentActive: newCurrentActive,
            folders
        }
    }),
    setCurrentActive: (folder) => set(state=>{
        let newCurrentActive,isDeleted;

        if(folder==='inbox'){
            newCurrentActive = state.inbox;
            isDeleted = false;
        }
        else if(folder === 'spam'){
            newCurrentActive = state.spam;
            isDeleted = false;
        }
        else{
            newCurrentActive = state.deleted;
            isDeleted = true;
        }

        return {
            currentActive: newCurrentActive,
            isDeleted
        }
    }),
    setMailContent: (mail) => set({mailContent: mail}),
    markAsRead: (mId) => set((state)=>{
        const inbox = state.inbox.map((m)=>{
            if(m.mId === mId){
                m.unread = false;
            }
            return m;
        });
        const spam = state.spam.map((m)=>{
            if(m.mId === mId){
                m.unread = false;
            }
            return m;
        });

        const folders = state.folders.map((folder)=>{
            const updatedLinkedTo = folder.linkedTo.map((m)=>{
                if(m.mId === mId){
                    m.unread = false;
                }
                return m;
            })
            return {
                ...folder,
                unread: updatedLinkedTo.reduce((acc, mail)=>{
                    return acc + (mail.unread?1:0)
                }
                ,0)
            }
        })
        return {inbox, spam, folders};
    }),
    flagMessage: (mId) => set((state)=>{
        const inbox = state.inbox.map((mail)=>{
            if(mail.mId === mId){
                mail.flagged = true
            }
            return mail
        })

        return {inbox}
    })
}));
