import React, { useState } from "react";
import user from '../../image/avtorization/user.svg';
import email from '../../image/avtorization/mail.svg';
import password from '../../image/avtorization/password.svg';
import styles from './PageRegistration.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import {InputsRegistrationProps} from '../../interface/InputsRegistrationProps/InputsRegistrationProps'
import { useAppDispatch } from "../../redux/hooks/hooks";
import { addUser, ageUser, cityUser, univerUser } from "../../redux/features/User/userSlice";
import { Navigate } from "react-router-dom";

const schema = yup.object({
    password: yup.string().required().min(6,''),
    confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'Пароли не совпадают'),
mail:yup.string().required().email()
  }).required();

function PageRegistration (){
   const dispatch=useAppDispatch();
   
    const { register, formState:{errors}, handleSubmit } = useForm<InputsRegistrationProps>({resolver: yupResolver(schema)});
    const [data, setData]=useState(false)
    const onSubmit: SubmitHandler<InputsRegistrationProps> = data =>{
        console.log(data); 
        const { login, age, city, univer} =data;
        dispatch (addUser(login));
        dispatch (ageUser(age));
        dispatch (cityUser(city));
        dispatch(univerUser(univer));
        setData(data=>!data)    
    }

      
    return(
      <section className={styles.registration__section}>
<form className={styles.registration__form} onSubmit={handleSubmit(onSubmit)}>
    <p>Регистрация</p>
 
     
        <label >
            Логин пользователя:
            <input type='text' placeholder='Логин' {...register('login',{required:true, minLength:5})}/>
        <img src={user} alt='Иконка пользователя' className={styles.registration__user}/>
        </label >
        <label >
        Электронная почта: 
      <input type='email' placeholder='Электронная почта'  className={styles.otherEmail__input} {...register('mail',{required:true, pattern:/^.+\@.+\..+$/})} 
      style={{border:errors.mail&&`1px solid #EB5757`}}/>
      <img src={email} alt='Иконка почты' className={styles.registration__mail}/>
      {errors.mail&&<p className={styles.errors__p}>Не правильно введена почта!</p>}
      </label>
      <label> Возраст:
        <input type='number' placeholder='Возраст' {...register('age', {min:14, max:99})} />
      </label>
      <label> Город:
        <input type='text' placeholder='Город' {...register('city', {maxLength:15})} />
      </label>
      <label> ВУЗ:
        <input type='text' placeholder='ВУЗ' {...register('univer', {maxLength:35})} />
      </label>
      <label >
            Введите пароль:
      <input type='password' placeholder='Пароль' {...register('password',{required:true, minLength:6})} />
      <img src={password} alt='Иконка пароля' className={styles.registration__password}/>
      </label>
      <label >
            Повторите пароль:
      <input type='password' placeholder='Повторите пароль' {...register('confirmPassword',{required:true, minLength:6})}
      style={{border:errors.confirmPassword&&`1px solid #EB5757`}} />
      <img src={password} alt='Иконка пароля' className={styles.registration__passwordtwo}/>
     {errors.confirmPassword&&<p className={styles.errors__p}>Пароли не совпадают!</p>}
       </label>
      <button className={styles.registration__btn} type='submit'>Зарегистрироваться</button>
      {data&&<Navigate replace to='/Страница пользователя' />}
        
</form>
       
</section>
    )
}
export default PageRegistration;