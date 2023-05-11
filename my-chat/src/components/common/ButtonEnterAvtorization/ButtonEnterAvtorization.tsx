import React from "react";
import styles from './ButtonEnterAvtorization.module.scss';
import {ButtonAvtorizationProps} from '../../../interface/ButtonAvtorizationProps/ButtonAvtorizationProps';
function ButtonEnterAvtorization ({children}: ButtonAvtorizationProps) {
    return(
        <button type="submit" className={styles.submitAvtorization__button}>{children}</button>
    )
}

export {ButtonEnterAvtorization}