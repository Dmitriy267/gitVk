import React from 'react';
import styles from './Footer.module.scss';
import instagram from "../../image/footer/ant-design_instagram-outlined.svg";
import vk from "../../image/footer/ant-design_vk-outlined.svg";
import fb from "../../image/footer/ant-design_fb-outlined.svg";
import visa from "../../image/footer/banksCards/visa_PNG30.png";
import webpay from "../../image/footer/banksCards/webpay.png";
import Verifed from "../../image/footer/banksCards/verified-by-visa 1.png";
import MCard from "../../image/footer/banksCards/1280px-Mastercard-logo 1.png";
import MCardSec from "../../image/footer/banksCards/securecode.png";
import belCard from "../../image/footer/banksCards/logotip-belkart-v-odnom-tsvete.png";
function Footer (){
    return (
        <>
<footer className={styles.footer}>
<div className={styles.infoBottom__div}>
            <div className={styles.infoBottomLeft__div}>
              <p>Мы в соцсетях</p>
              <div className={styles.message__div}>
                <img src={instagram} alt="Изображение иконки инстаграмм" />
                <img src={vk} alt="Изображение иконки вконтакте" />
                <img src={fb} alt="Изображение иконки фейсбук" />
              </div>
            </div>
            <div className={styles.messageBottom__div}>
              <img src={visa} alt="Изображение логотипа Виза" />
              <img src={webpay} alt="Изображение логотипа Вебпэй" />
              <img src={Verifed} alt="Изображение логотипа Верифед Виза" />
              <img src={MCard} alt="Изображение логотипа Мастеркард" />
              <img src={MCardSec} alt="Изображение логотипа Мастеркард Секьюр Код"/>
              <img src={belCard} alt="Изображение логотипа Белкарт" />
            </div>
            </div>
</footer>
</>
    )
}
export default Footer;