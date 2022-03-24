import React from "react";
import s from "../Dialogs.module.css";

type UserMessageType = {
    id:string
    message:string
}
type MessagePropsType = {
    userMessages:Array<UserMessageType>
}

const Message:React.FC<MessagePropsType>=({userMessages})=>{
    return(
        <div className={s.message}>
            <ul>
                {userMessages.map((el)=><li key={el.id}>{el.message}</li>)}
            </ul>

        </div>
    )
}
export default Message