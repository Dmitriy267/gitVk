import React,{FormEvent, useState} from "react";
import styles from './RouteMainAvtorization.module.scss';
import User from '../../image/avtorization/user.svg';
import password from '../../image/avtorization/password.svg';
import {Link, useNavigate} from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import {ButtonEnterAvtorization} from '../common/ButtonEnterAvtorization/ButtonEnterAvtorization';
import {IFormInputAvtorization} from '../../interface/IFormInputAvtorization/IFormInputAvtorization';
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { RepeatAvtorization} from '../../redux/features/Avtorization/AvtorizationSlice';
const  RouteMainAvtorization =()=>{
    const dispatch=useAppDispatch();
    const MyLogin=useAppSelector(state=>state.Avtorization.myLogin);
    const MyPassword=useAppSelector (state=>state.Avtorization.myPassword)
    const myNavigate=useNavigate();
    const { register, handleSubmit } = useForm<IFormInputAvtorization>();
    const onSubmit: SubmitHandler<IFormInputAvtorization> = data => {
       const {myLoginApp, myPasswordApp}=data;
       console.log(data);
       dispatch (RepeatAvtorization(myLoginApp));
       dispatch (RepeatAvtorization(myPasswordApp));
       if (myLoginApp===MyLogin&&myPasswordApp===MyPassword){
        return myNavigate ('/Страница пользователя')
       }

    }
    return (
     <section className={styles.avtorization__section}>
     <form className={styles.avtorization__form} onSubmit={handleSubmit(onSubmit)}>
    <p className={styles.form__p_bold}>Авторизация</p>
    <p className={styles.form__p}>Авторизируйтесь, чтобы начать <br/>общаться с другими участниками</p>
    <input  className={styles.avtorization__input} placeholder="Логин" {...register('myLoginApp', { required: false, minLength:5})}/>
    <img src={User} alt="Иконка пользователя" className={styles.avtorization__img} />
    <input  className={styles.password__input} placeholder="Пароль" {...register('myPasswordApp',{required:false, minLength:6})}/>
    <img src={password} alt="Иконка пароля" className={styles.password__img}/>
<ButtonEnterAvtorization>
Войти
</ButtonEnterAvtorization>
<button onClick={()=>alert('Логин: Дмитрий, пароль: 111111')} className={styles.repeatLogin__button}>Напомнить пароль</button>
<p className={styles.text__p}>Еще нет аккаунта? <Link to="/Регистрация">Регистрация</Link></p>
</form>
</section>

    )
}

export {RouteMainAvtorization}