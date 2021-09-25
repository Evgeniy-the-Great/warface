import React from "react";
import Benefits from "./benefits/Benefits";
import style from "./Main.module.css";

const Main = ({ benefits }) => {
  return (
    <section>
      <div className={style.Container}>
        <div className={style.MainBox}>
          <div>
            <h1 className={style.MainTitle}>
              DealkGo.com — совершайте безопасную сделку сейчас !
            </h1>
            <span className={style.Rectangle}></span>
            <p className={style.MainText}>
              Присоединяйтесь к нам прямо сейчас, и получите15 бонусов на счёт
              при первом пополении своего баланса.
            </p>
            <button type="button" className={style.JoinUp}>
              Присоединиться
            </button>
          </div>
          <div>
            <ul>
              {benefits.map((item) => {
                return <Benefits item={item} key={item.id} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
