import React, { useState, useRef, useEffect } from "react";
import styles from "./PastDeals.module.css";

const deals = [
  {
    cur: "NEAR/USDT",
    market: "SPOT · 1 мин. назад",
    pl: "Прибыль",
    amount: "58.6206%",
    arrow_path: "/sprite.svg#arrow-up",
    route: "Цель 4",
    entry_date: "Дата входа 06.10.2022",
  },
  {
    cur: "BTC/USDT",
    market: "SPOT · 1 мин. назад",
    pl: "Прибыль",
    amount: "6.02%",
    arrow_path: "/sprite.svg#arrow-up",
    route: "Цель 3",
    entry_date: "Дата входа 06.10.2022",
  },
  {
    cur: "ETH/USDT",
    market: "SPOT · 1 мин. назад",
    pl: "Прибыль",
    amount: "16.3%",
    arrow_path: "/sprite.svg#arrow-up",
    route: "Цель 4",
    entry_date: "Дата входа 06.10.2022",
  },
  {
    cur: "NEAR/USDT",
    market: "SPOT · 1 мин. назад",
    pl: "Прибыль",
    amount: "0.963%",
    arrow_path: "/sprite.svg#arrow-up",
    route: "Цель 4",
    entry_date: "Дата входа 06.10.2022",
  },
  {
    cur: "NEAR/USDT",
    market: "SPOT · 1 мин. назад",
    pl: "Прибыль",
    amount: "58.6206%",
    arrow_path: "/sprite.svg#arrow-up",
    route: "Цель 4",
    entry_date: "Дата входа 06.10.2022",
  },
  {
    cur: "NEAR/USDT",
    market: "SPOT · 1 мин. назад",
    pl: "Прибыль",
    amount: "58.6206%",
    arrow_path: "/sprite.svg#arrow-up",
    route: "Цель 4",
    entry_date: "Дата входа 06.10.2022",
  },
  {
    cur: "NEAR/USDT",
    market: "SPOT · 1 мин. назад",
    pl: "Прибыль",
    amount: "58.6206%",
    arrow_path: "/sprite.svg#arrow-up",
    route: "Цель 4",
    entry_date: "Дата входа 06.10.2022",
  },
  {
    cur: "NEAR/USDT",
    market: "SPOT · 1 мин. назад",
    pl: "Прибыль",
    amount: "58.6206%",
    arrow_path: "/sprite.svg#arrow-up",
    route: "Цель 4",
    entry_date: "Дата входа 06.10.2022",
  },
];

const PastDeals = () => {
  const listRef = useRef(null);
  const thumbRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - listRef.current.offsetLeft);
    setScrollLeft(listRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - listRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    listRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleThumbMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(listRef.current.scrollLeft);
  };

  const handleThumbMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - startX;
    const scroll =
      (x / thumbRef.current.clientWidth) * listRef.current.scrollWidth;
    listRef.current.scrollLeft = scrollLeft + scroll;
  };

  const updateScrollbar = () => {
    const list = listRef.current;
    const thumb = thumbRef.current;
    const scrollWidth = list.scrollWidth;
    const clientWidth = list.clientWidth;
    const scrollLeft = list.scrollLeft;
    const thumbWidth = (clientWidth / scrollWidth) * clientWidth;
    const thumbLeft = (scrollLeft / scrollWidth) * clientWidth;
    thumb.style.width = `${thumbWidth}px`;
    thumb.style.transform = `translateX(${thumbLeft}px)`;
  };

  useEffect(() => {
    const list = listRef.current;
    list.addEventListener("scroll", updateScrollbar);
    updateScrollbar();
    return () => {
      list.removeEventListener("scroll", updateScrollbar);
    };
  }, []);

  return (
    <section className={styles.past_deals} id="deals">
      <div>
        <h2 className={styles.past_deals_title}>Прошедшие сделки</h2>
        <p className={styles.past_deals_status}>Онлайн</p>
        <ul
          className={styles.past_deals_list}
          ref={listRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {deals.map((deal, index) => (
            <li key={index} className={styles.deal_card}>
              <p className={styles.deal_card_cur}>{deal.cur}</p>
              <p className={styles.deal_card_market}>{deal.market}</p>
              <p className={styles.deal_card_pl}>{deal.pl}</p>
              <p className={styles.deal_card_amount}>
                {deal.amount}
                <span>
                  <svg
                    className={styles.deal_card_arrow}
                    width="11"
                    height="20"
                  >
                    <use href="/sprite.svg#arrow"></use>
                  </svg>
                </span>
              </p>
              <div className={styles.deal_card_details}>
                <span className={styles.deal_card_route}>{deal.route}</span>
                <span className={styles.deal_card_entry_date}>
                  {deal.entry_date}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className={styles.scrollbar_container}>
          <div className={styles.scrollbar}>
            <div
              className={styles.scrollbar_thumb}
              ref={thumbRef}
              onMouseDown={handleThumbMouseDown}
              onMouseMove={handleThumbMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastDeals;
