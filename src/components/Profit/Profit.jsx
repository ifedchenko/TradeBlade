import React from "react";
0.3;
import styles from "./Profit.module.css";

const Profit = () => {
  return (
    <section className={styles.profit}>
      <div className={styles.profit_image}>
        <svg className={styles.profit_image_icon} width="639" height="60">
          <use href="/sprite.svg#profit-stat-desktop"></use>
        </svg>
      </div>
      <div className={styles.profit_stat}>
        <div>
          <h3 className={styles.profit_stat_title}>Цифры</h3>
          <h3 className={styles.profit_stat_title_data}>Cентябрь 2022</h3>
        </div>
        <div>
          <h3 className={styles.profit_stat_data}>Торговой прибыли</h3>
          <h3 className={styles.profit_stat_data_value}>2756%</h3>
        </div>
        <div>
          <h3 className={styles.profit_stat_data}>
            фьючерсных и спотовых сделок
          </h3>
          <h3 className={styles.profit_stat_data_value}>67</h3>
        </div>
        <div>
          <h3 className={styles.profit_stat_data}>прибыль подписчиков</h3>
          <h3 className={styles.profit_stat_data_value}>375000</h3>
        </div>
      </div>
    </section>
  );
};

export default Profit;
