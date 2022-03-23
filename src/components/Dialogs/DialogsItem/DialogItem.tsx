import React from "react";
import {NavLink} from "react-router-dom";

type UserLinkType = {
    id: string
    link: string
    nameUser: string
}
type DialogItemPropsType = {
    userLinks:Array<UserLinkType>
}

const DialogItem: React.FC<DialogItemPropsType> = ({userLinks}) => {
    let path = "/dialogs/"
    return (
        <div>

           <ul>
               {userLinks.map((el)=><li key={el.id}><NavLink to={path + el.link}>{el.nameUser}</NavLink></li> )}
           </ul>

        </div>
    )
}
export default DialogItem