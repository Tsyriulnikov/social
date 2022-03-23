import React from "react";
import {Routes, Route} from "react-router-dom"
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App: React.FC = () => {
    return (
        <div className={s.app_wrapper}>
            <Header/>
            <Navbar/>
            <div className={s.app_wrapper_content}>
                <Routes>
                    <Route path={'/'} element={<Profile/>}/>
                    <Route path={'/dialogs'} element={<Dialogs/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                </Routes>
            </div>

        </div>

    )
}

export default App;
