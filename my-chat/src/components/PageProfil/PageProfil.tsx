import React, { useState } from "react";
import styles from './PageProfil.module.scss';
import myPhoto from '../../image/myPhoto.jpg';
import { useAppSelector } from '../../redux/hooks/hooks';
import {ButtonAdd} from '../common/ButtonAdd/ButtonAdd';
import PostAddBlock from '../PostAddBlock/PostAddBlock';
import { useNavigate } from "react-router-dom";

function PageProfil (){

    const userProfil=useAppSelector(state=>state.user.user);
    const postPublick=useAppSelector(state=>state.post);
    const myImageAdd=useAppSelector(state=>state.imagePost)
    const [textArea, setTextArea]=useState(false);
    const pageFrends=useNavigate();
    function handleButtonLink (){
    return pageFrends('/Список моих друзей')
    }
    return (
        <section className={styles.myProfil__section}>
            <div className={styles.wrapperProfil__div}>
            <div className={styles.profil__div}>
            <h3>Мой профиль</h3>
            <p>Дмитрий</p>
            <img src={myPhoto} alt='Мое фото'/>
            <div className={styles.myInfo__div}>
           <p>Краткая информация</p>
           <ul className={styles.profil__ul}>
            <li>Возраст: {userProfil.age}</li>
            <li>Город: {userProfil.city}</li>
            <li>ВУЗ: {userProfil.univer} </li>
           </ul>
           </div>
           </div>
          <div className={styles.postBlock__div}>
            <ButtonAdd onClick={()=>setTextArea(textArea=>!textArea)}>Добавить пост!</ButtonAdd>
            <ButtonAdd onClick={handleButtonLink}>Мои друзья</ButtonAdd>
          </div>
          {textArea?<PostAddBlock/>:null}
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

    )
}
export default PageProfil;