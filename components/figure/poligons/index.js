import style from "./style.module.scss";

const LineHorizontal = () => {
  return <div className={style.linehorizontal}></div>;
};

const LineVertical = () => {
  return <div className={style.linevertical}></div>;
};

const Ark = () => {
  return <div className={style.boxark}></div>;
};

export { LineHorizontal, LineVertical, Ark };
