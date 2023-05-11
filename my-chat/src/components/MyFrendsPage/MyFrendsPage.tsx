import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import styles from './MyFrendsPage.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function MyFrendsPage (){
    return (
        <>
        <Header/>
        <section className={styles.frends__section}>
        <SearchForm/>
        </section>
        <Footer/>
        </>

    )
}
export default MyFrendsPage;