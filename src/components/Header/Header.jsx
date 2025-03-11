import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const links = [
    { name: "цифры", path: "#numbers" },
    { name: "сделки онлайн", path: "#deals" },
    { name: "о компании", path: "#about" },
    { name: "как начать", path: "/some-link3" },
    { name: "тарифы", path: "/some-link4" },
    { name: "отзывы", path: "/some-link5" },
    { name: "FAQ", path: "/some-link6" },
  ];
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="/">
        <img
          src="/images/header-logo.svg"
          alt="Header Logo"
          width="131.83"
          height="64"
          className={styles.logo}
        />
      </a>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {links.map((link) => (
            <li key={link.path} className={styles.navItem}>
              <a href={link.path} className={styles.navLink}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.headerButtons}>
        <a href="/sign-in">
          <button className={styles.headerButtonSignIn}>Войти</button>
        </a>
        <a href="/sign-up">
          <button className={styles.headerButtonSignUp}>Регистрация</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
