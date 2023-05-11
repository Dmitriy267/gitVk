import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { ButtonAdd } from '../common/ButtonAdd/ButtonAdd';
import styles from './AddImagePostPage.module.scss';
import {addImagePost} from '../../redux/features/ImagePost/ImagePostSlice';

function AddImagePostPage (){
    const [myImage, setMyImage]=useState([]);
    const dispatch=useAppDispatch()
    const getImage=async ()=>{
        const response=await fetch ('/animals');
        const data=await response.json();
        console.log(data)
       setMyImage(data)
    }
    useEffect(()=>{
        getImage();
    }, [])
    return(
      <>
        <div className={styles.addImage__div}>
        {myImage.map((el,id )=>{
            const {img, altDescript}=el;
            return(
            <div key={id} className={styles.formBlock__div}>
               <img src={`${img}`} alt={ `${altDescript}`} className={styles.addImage__image} />
               <div className={styles.position__div}>
               <ButtonAdd onClick={()=>dispatch (addImagePost(el))}>Добавить</ButtonAdd>
               </div>
            </div>
         
            )

        })}
        </div>
        </>
   
    )
}
export {AddImagePostPage}