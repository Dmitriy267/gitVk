import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './NotFoundPage.module.scss';

function NotFoundPage (){
    return(
        <>
        <Header/>
        <section className={styles.notFound__section}>
        <h1>Ошибка 404</h1>
        <h3>Возможно, у вас опечатка в адресе страницы, или её просто не существует</h3>
        </section>
        <Footer/>
        </>

    )
}
export default NotFoundPage