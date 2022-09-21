import { FOLDERS, INBOX } from "../../store/data"
import React from "react"
import './FolderList.css'
import { useStore } from "../../store/store"
export default function FolderList(props){

    const setCurrentActive = useStore(state=>state.setCurrentActive)
    const folders = useStore(state=>state.folders)
    return(
        <div className="folder-list">
            <h3 style={{color:'gray',padding:'0.5rem'}}>Folders</h3>

            <ul>
                {folders.map((folder)=>{
                    return(
                        <li key={folder.id} onClick={()=>setCurrentActive(folder.id)}>
                            <span>{folder.name}</span>
                            {folder.id !== 'deleted' && <span>{folder.unread}</span>}
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}