import React from "react";
import css from "./Scale.module.css";
const Scale = ({ rating }) => {
  const colors = {
    1: "red",
    2: "orange",
    3: "yellow",
    4: "green",
  };
  return (
    <div className={css.container}>
      <div className={css[rating === 0 ? "empty" : colors[rating]]}></div>
      <div className={css[rating <= 1 ? "empty" : colors[rating]]}></div>
      <div className={css[rating <= 2 ? "empty" : colors[rating]]}></div>
      <div className={css[rating <= 3 ? "empty" : colors[rating]]}></div>
    </div>
  );
};

export default Scale;
