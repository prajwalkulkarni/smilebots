import React from "react";
import { useStore } from "../../store/store";
import "./MailList.css";
export default function MailList(props){

    const currentActive = useStore(state=>state.currentActive)
    const setMailContent = useStore(state=>state.setMailContent)
    const deleteMessage = useStore(state=>state.deleteMessage)
    const isDeleted = useStore(state=>state.isDeleted)
    const markAsRead = useStore(state=>state.markAsRead)
    console.log(currentActive)

    function deleteMail(e,mId){
        e.stopPropagation()
        console.log(mId)
        deleteMessage(mId)
    }


    function mailitemClicked(mail){
        setMailContent(mail)
        markAsRead(mail.mId)

    }

    return(
        <div className="mail-list">
            <h3>Focused</h3>
            <ul>
                {currentActive.map((mail)=>{
                    return(
                        <li key={mail.mId} onClick={()=>mailitemClicked(mail)}>
                            <p>{mail.unread? <b>{mail.subject}</b>:mail.subject}</p>
                            {!isDeleted && <button onClick={(e)=>deleteMail(e,mail.mId)}>Delete</button>}
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}