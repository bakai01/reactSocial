import React from "react";

import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.img} src="https://www.nicepng.com/png/full/140-1401926_r-anime-logo-high-resolution-anime-girl-logo.png" alt="logo" />
        </header>
    );
};

export default Header;