import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo: React.FC<any> = ({props: any}) => {
    return (
        <div>
            <div className={s.profileImageBackground}>
                <img src="https://img.gazeta.ru/files3/649/13056649/smesha-pic905-895x505-63287.jpg"/>
            </div>

            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo