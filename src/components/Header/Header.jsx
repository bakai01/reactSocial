import React from "react";

import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img className={style.img} src="https://www.logolynx.com/images/logolynx/e4/e4152fb369abe7dcc97e82d74e83879a.png" alt="logo" />
    </header>
  );
}

export default Header;