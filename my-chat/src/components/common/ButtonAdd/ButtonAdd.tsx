import React from 'react';
import styles from './ButtonAdd.module.scss';
import {ButtonAddProps} from '../../../interface/ButtonAddProps/ButtonAddProps';
const ButtonAdd =({children, onClick}:ButtonAddProps)=><button onClick={onClick} className={styles.add__btn}>{children}</button>
    
export {ButtonAdd};