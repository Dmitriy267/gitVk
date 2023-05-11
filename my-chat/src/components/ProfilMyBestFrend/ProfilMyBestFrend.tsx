import React from 'react';
import {  useAppSelector } from '../../redux/hooks/hooks';
import { ButtonAdd } from '../common/ButtonAdd/ButtonAdd';
import styles from './ProfilMyBestFrend.module.scss';

function ProfilMyBestFrend (){
   const myBestFrend=useAppSelector(state=>state.myBestFrend.myFrend);
   const myImageAdd=useAppSelector(state=>state.imagePost);
   const postPublick=useAppSelector(state=>state.post);
  
    return(
        <>
       
        <section className={styles.FrendProfil__section}>
            <div className={styles.wrapperProfil__div}>
            <div className={styles.profil__div}>
            <h3>Мой профиль</h3>
            { myBestFrend.map((item, id)=>{
                const {name, img, alt, age, city, univer}=item;
                return (
                    <div key={id}>
                    <p>{name}</p>
                    <img src={`${img}`} alt={`${alt}`}/>         
            <div className={styles.FrendInfo__div}>
           <p>Краткая информация</p>
           <ul className={styles.profil__ul}>
            <li>Возраст:{age}</li>
            <li>Город: {city}</li>
            <li>ВУЗ: {univer}</li>
           </ul>
           </div>
           </div>
                )
 })} 
           </div>
          <div className={styles.postBlock__div}>
            <ButtonAdd onClick={()=>{}}>Добавить пост!</ButtonAdd>
            <ButtonAdd onClick={()=>{}}>Мои друзья</ButtonAdd>
          </div>
           </div>
         
           <div className={styles.postresult__div}>
            <h3>Мой пост</h3>
            <div className={styles.dataPost__div}>
                <div className={styles.paddingText__div}>
           <p>{postPublick.post}</p>
           </div>
           {myImageAdd.imagePost.map((el,id)=>{
            const {img, altDescript}=el;
            return(
         <div key={id} className={styles.addImagePost__div}>
            <img src={`${img}`} alt={`${altDescript}`} className={styles.addImagePost__image}/>
               </div>
            )
           })}
           </div>
           
          
           </div>
           
        </section>
        </>
        
    )
}
export default ProfilMyBestFrend;