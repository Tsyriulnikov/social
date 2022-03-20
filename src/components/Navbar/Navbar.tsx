import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar: React.FC<any> = (props: any) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <div>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </div>
                <div>
                    <NavLink to={'/dialogs'}>Dialogs</NavLink>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </div>
        </nav>

    )
}
export default Navbar