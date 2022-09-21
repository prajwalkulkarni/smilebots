import React from "react"
import { useStore } from "../../store/store"
import "./MailContent.css"
export default function MailContent() {

    const mailContent = useStore(state => state.mailContent)
    const setMailContent = useStore(state=>state.setMailContent)
    const markAsRead = useStore(state=>state.markAsRead)
    const currentActive = useStore(state=>state.currentActive)

    function firstItemClick(){
        setMailContent(currentActive[0])
        markAsRead(currentActive[0].mId)
    }

    return (
        <div className="mail-content">
            {mailContent && <div>
                <h3>{mailContent?.subject}</h3>

            <p>
                {mailContent?.content}
            </p>
            </div>}

            {
                !mailContent && <div className="placeholder">
                    <h2>Select an item to read</h2>
                    <h4 onClick={firstItemClick}>Click here to always select the first item in the list</h4>
                    </div>
            }

        </div>
    )
}