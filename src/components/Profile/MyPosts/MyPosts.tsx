import React, {useState} from "react";
import Post from "./Post/Post";
import {v1} from "uuid";

const MyPosts: React.FC<any> = (props: any) => {
    const [messages,setMessages]=useState([
        {id:v1(), message:"Hi! How are you", avatar:"https://multsforkids.ru/data/uploads/personaji/ejik/ejik-kartinki-1.jpg", likes:5},
        {id:v1(), message:"Como esta?", avatar:"https://multsforkids.ru/data/uploads/personaji/ejik/ejik-kartinki-1.jpg",likes:33},
        {id:v1(), message:"By! Will see you",avatar:"https://multsforkids.ru/data/uploads/personaji/ejik/ejik-kartinki-1.jpg", likes:66}
    ])

    return (
        <div>
            <Post messages={messages}/>
        </div>
    )
}
export default MyPosts