import React from "react";
import Post from "./Post/Post";

const MyPosts: React.FC<any> = (props: any) => {
    return (
        <div>
            <Post message={"Hi! How are you"}
                  avatar={"https://multsforkids.ru/data/uploads/personaji/ejik/ejik-kartinki-1.jpg"}/>
            <Post message={"Como esta?"}
                  avatar={"https://multsforkids.ru/data/uploads/personaji/ejik/ejik-kartinki-1.jpg"}/>
            <Post message={"By! Will see you"}
                  avatar={"https://multsforkids.ru/data/uploads/personaji/ejik/ejik-kartinki-1.jpg"}/>
        </div>
    )
}
export default MyPosts