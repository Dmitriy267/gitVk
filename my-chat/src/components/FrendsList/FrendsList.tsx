import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import styles from './FrendsList.module.scss';
import {FetchFrendsAll, filterFrends, getFrends} from '../../redux/features/FrendsList/FrendsSlice';
import {getInfoMyFrend} from '../../redux/features/MyBestFrend/MyBestFrendSlice'
import Header from '../Header/Header';
import { ButtonAdd } from '../common/ButtonAdd/ButtonAdd';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
function FrendsList (){
const dispatch=useAppDispatch();
const {loading, hasError, frends}=useAppSelector(state=>state.frendsList)
const navigateUsers=useNavigate()
useEffect (()=>{
    dispatch (FetchFrendsAll())
}, [dispatch])

    return(
        <>
        <Header/>
        <section className={styles.listFrends__section}>
            <h1>Список моих друзей</h1>
        {loading&&<h2>Загрузка</h2>}
        {hasError&&<h3>{hasError}</h3>}
         <div className={styles.table__div}>
            {frends.map((item, id)=>{
                const {name, img, alt, }=item;
                return(
                    <div key={id} className={styles.blockFrends__div}>
                        <div className={styles.position__div}>
                        <div className={styles.click__div} onClick={()=>{navigateUsers('/Страница друга'); 
                        dispatch(getInfoMyFrend(item)) 
                      
                        }}>
                        <img src={`${img}`} alt={`${alt}`}/>
                        </div>
                        <p>{name}</p>
                        <ButtonAdd onClick={()=>dispatch(filterFrends(item))}>Удалить</ButtonAdd>
                        </div>
                    </div>
                    
                )

            })}
            </div>
           
        </section>
        <Footer/>
        </>
    )
}
export default FrendsList;