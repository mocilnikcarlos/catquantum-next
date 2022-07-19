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

const FigFooter = () => {
  return (
    <div className={style.boxfigfooter}>
      <div className={style.rectangleleft}></div>
      <div className={style.rectangleright}></div>
    </div>
  );
};

export { LineHorizontal, LineVertical, Ark, FigFooter };
