import React from "react"
import { useStore } from "./store/store"
import FolderList from "./components/Folders/FolderList"
import MailList from "./components/Mails/MailList"
import MailContent from "./components/MailContent/MailContent"
import "./App.css"
export default function App() {


    const store = useStore(state => state.inbox)

    
    return (
        <div className="App">

            <h1>Outlook</h1>
            <div className="container">
                <FolderList />
                <MailList />
                <MailContent/>

            </div>
        </div>
    )
}