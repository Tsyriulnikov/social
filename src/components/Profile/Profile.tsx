import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
const Profile: React.FC<any> = (props: any) => {
    return (
        <div>
            <div className={s.profileImageBackground}>
                <img src="https://thumbs.dfs.ivi.ru/storage5/contents/5/d/b9eff6812e98ec05a13622b0fd88f2.jpg/308x174/"/>
            </div>

            <div>
                ava+description
            </div>

            <MyPosts/>

        </div>
    )
}
export default Profile