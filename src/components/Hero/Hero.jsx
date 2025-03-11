import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.details}>
        <h1>моментально Копируй сделки профи трейдеров </h1>
        <h2>
          Начни копировать сделки с успешной командой профессиональных <br></br>
          трейдеров в автоматическом режиме.
        </h2>
        <div className={styles.inputContainer}>
          <input
            type="email"
            placeholder="Ваш e-mail"
            className={styles.input}
          />
          <button className={styles.button}>Начать</button>
        </div>
        <h3>5 дней бесплатного пользования</h3>
      </div>
      <div className={styles.hero_img}>
        <img
          src="/images/hero_img.png"
          alt="Hero Image"
          className={styles.image}
          width="469"
        />
      </div>
    </section>
  );
};

export default Hero;
