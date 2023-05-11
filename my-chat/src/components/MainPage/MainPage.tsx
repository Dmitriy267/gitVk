import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MainPage.module.scss';

function MainPage (){
    const navigate=useNavigate (); 
    return (
<section className={styles.mainPage__section}>
    <h1>Добро пожаловать в социальную сеть "Друзья"</h1>
   <button onClick={()=>navigate('/Вход и регистрация')}>Присоединиться</button>
</section>
    )
}
export default MainPage;