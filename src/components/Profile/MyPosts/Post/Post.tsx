import React from "react";
import s from "./Post.module.css";

type MessagePropsType = {
    id:string
    message: string
    avatar: string
    likes: number
    }
type  PostPropsType = {
    messages: Array<MessagePropsType>

}

const Post: React.FC<PostPropsType> = ({messages}) => {
    return (

        <div className={s.post}>
            <ul>
                {messages.map((el)=><li key={el.id}>
                    <img src={el.avatar}/>{el.message} Likes:{el.likes}</li>)}

            </ul>
        </div>
    )
}
export default Post