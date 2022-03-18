import React from "react";
import s from "./Header.module.css"

const Header: React.FC<any> = (props: any) => {
    return (
        <header className={s.header}>
            <img src='https://www.pinayu.com/blog/images/comprar-logotipo-comunicacion-mensajeria.jpg'/>
        </header>
    )
}
export default Header;