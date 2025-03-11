import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section class={styles.about} id="about">
      <div className={styles.about_image}>
        <svg className={styles.about_image_icon} width="639" height="60">
          <use href="/sprite.svg#profit-stat-desktop"></use>
        </svg>
      </div>

      <div class={styles.about_description}>
        <div class={styles.about_text}>
          <h2 class={styles.about_text_title}>О компании</h2>
          <p class={styles.about_text_descritpion}>
            Мы опытная команда, для которой трейдинг – профессия. TradeBlade
            является авторизованным официальным брокером биржи Binance.
            <br />
            <br />
            Он представляет пользователям множество преимуществ, таких как более
            високая скорость синхронизации API и возможность создать учетную
            запись Binance через платформу TradeBlade всего в 1 клик.
          </p>
        </div>
        <div class={styles.about_form}>
          <p class={styles.about_form_title}>
            Попробуйте сейчас и получите <br />5 дней бесплатного пользования
          </p>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Ваш e-mail"
              className={styles.input}
            />
            <button className={styles.button}>Попробовать</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
