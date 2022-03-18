import React from "react";
import s from "./Post.module.css";

type PostPropsType = {
    message: string
    avatar: string
}

const Post: React.FC<PostPropsType> = ({message, avatar}) => {
    return (

        <div className={s.post}>
            <img src={avatar}/>
            {message}
        </div>
    )
}
export default Post