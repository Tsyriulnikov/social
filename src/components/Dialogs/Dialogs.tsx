import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";

const Dialogs: React.FC<any> = ({props: any}) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem link={"Krosh"} nameUser={"Krosh"}/>
                <DialogItem link={"Iojik"} nameUser={"Iojik"}/>
                <DialogItem link={"Barash"} nameUser={"Barash"}/>
                <DialogItem link={"Nusha"} nameUser={"Nusha"}/>
                <DialogItem link={"Kopatich"} nameUser={"Kopatich"}/>
                <DialogItem link={"Kar_Karich"} nameUser={"Kar_Karich"}/>
                <DialogItem link={"Sovuniya"} nameUser={"Sovuniya"}/>
                <DialogItem link={"Pin"} nameUser={"Pin"}/>
                <DialogItem link={"Losyash"} nameUser={"Losyash"}/>
            </div>
            <div className={s.messages}>
                <Message message={"Hi! How are you"}/>
                <Message message={"Hi! Como esta"}/>
                <Message message={"By! Will see you"}/>
            </div>
        </div>
    )
}
export default Dialogs