import create from "zustand";
import {SPAM, INBOX} from "./data";

export const useStore = create((set, get) => ({
    spam: SPAM,
    inbox: INBOX,
    currentActive: INBOX,
    mailContent: null,
    setCurrentActive: (folder) => set({currentActive: folder==="inbox"? INBOX: folder==="spam"? SPAM: []}),
    setMailContent: (mail) => set({mailContent: mail}),
    deleteMessage: (mId) => set((state)=>{
        const inbox = state.inbox.filter((m)=>m.mId !== mId);
        const spam = state.spam.filter((m)=>m.mId !== mId);
        return {inbox, spam};
    } ),
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
        return {inbox, spam};
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
