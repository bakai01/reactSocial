import React from 'react'
import { Link } from 'react-router-dom'

import style from './Header.module.css'

const Header = props => {

    return (
        <header className={style.header}>
            <img
                className={style.img}
                src='https://www.nicepng.com/png/full/140-1401926_r-anime-logo-high-resolution-anime-girl-logo.png'
                alt='logo'
            />


            {props.isAuthorized
                ? <p>{props.login}</p>
                : <Link to='login'><button className={style.btn}>Login</button></Link>
            }
        </header>
    )
}

export default Header