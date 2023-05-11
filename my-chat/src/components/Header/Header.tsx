import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks/hooks";
import styles from './Header.module.scss';


function Header (){
    const nameUser=useAppSelector(state=>state.user.user)
    return(
<header className={styles.header}>
    <nav className={styles.navigation__nav}>
        <ul>
<li><Link to='/Страница друзей'>Поиск друзей</Link></li>
<li><Link to='/Страница пользователя'>Моя страница</Link></li>
</ul>
  </nav>
    <div className={styles.login__div}>
        {nameUser&&<p>Здравствуй {nameUser.login}</p>}
    </div>
 
</header>
    )
}
export default Header;