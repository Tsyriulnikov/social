import React, {useState} from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import {v1} from "uuid";

const Dialogs: React.FC<any> = ({props: any}) => {
    const [userLinks, setUserLinks] = useState([
            {id: v1(), link: "Krosh", nameUser: "Krosh"},
            {id: v1(), link: "Iojik", nameUser: "Iojik"},
            {id: v1(), link: "Barash", nameUser: "Barash"},
            {id: v1(), link: "Nusha", nameUser: "Nusha"},
            {id: v1(), link: "Kopatich", nameUser: "Kopatich"},
            {id: v1(), link: "Kar_Karich", nameUser: "Kar_Karich"},
            {id: v1(), link: "Sovuniya", nameUser: "Sovuniya"},
            {id: v1(), link: "Pin", nameUser: "Pin"},
            {id: v1(), link: "Losyash", nameUser: "Losyash"}
        ]
    )
    const [userMessages, setUserMessages] = useState([
        {id: v1(), message: "Hi! How are you"},
        {id: v1(), message: "Hi! Como esta"},
        {id: v1(), message: "By! Will see you"},
    ])


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem userLinks={userLinks}/>
            </div>
            <div className={s.messages}>
                <Message userMessages={userMessages}/>
            </div>
        </div>
    )
}
export default Dialogs