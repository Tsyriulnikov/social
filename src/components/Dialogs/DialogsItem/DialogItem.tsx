import React from "react";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    link:string
    nameUser:string
}

const DialogItem:React.FC<DialogItemPropsType>=({link,nameUser})=>{
    let path="/dialogs/"
    return(
        <div>
            <NavLink to={path + link}>{nameUser}</NavLink>
        </div>
    )
}
export default DialogItem