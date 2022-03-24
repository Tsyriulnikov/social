import React from "react";
import {Routes, Route} from "react-router-dom"
import s from "./App.module.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Ads from "./components/Ads/Ads";


const App: React.FC = () => {
    return (
        <div className={s.appWrapper}>
            <div className={s.header}>
                <Header/>
            </div>
            <div className={s.nav}>
                <Navbar/>
            </div>
            <div className={s.ads}>
                <Ads/>
            </div>
                       {/*<div className={s.app_wrapper_content}>*/}
            <div className={s.articles}>
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
