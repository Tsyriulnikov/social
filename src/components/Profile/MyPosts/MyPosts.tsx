import React from "react";
import Post from "./Post/Post";

const MyPosts: React.FC<any> = (props: any) => {
    return (
        <div>
            <Post message={"Hi! How are you"}
                  avatar={"https://souzmult.ru/api/images/character-5d75f097557b2.svg"}/>
            <Post message={"Como esta?"}
                  avatar={"https://souzmult.ru/api/images/character-5d75f05ff03bb.svg"}/>
            <Post message={"By! Will see you"}
                  avatar={"https://img.kupigolos.ru/hero/5f2d1b5594549.png?p=bh&s=47ca66a55a020d25fcec96a0f7b02b71"}/>
        </div>
    )
}
export default MyPosts