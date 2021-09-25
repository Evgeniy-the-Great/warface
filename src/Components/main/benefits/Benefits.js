import React from "react";
import style from "./Benefits.module.css";

const Benefits = ({ item }) => {
  return (
    <li className={style.Item}>
      <svg width="75" height="72" className={style.Star}>
        <use src="../icon/sprite.svg#icon-big-star"></use>
      </svg>
      <div className={style.Break}>
        <p className={style.ItemTitle}>{item.title}</p>
        <span></span>
        <p className={style.ItemText}>{item.text}</p>
      </div>
    </li>
  );
};

export default Benefits;
