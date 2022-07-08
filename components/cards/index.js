import style from "./style.module.scss";

export default function CardWork({ title, text, icon }) {
  return (
    <>
      <div className={style.boxcircledesign}>
        <div className={style.contentcircledesign}>
          <div className={style.iconcircle}>
            <div className={style.icon}>{icon}</div>
          </div>
          <p className={`${style.titlecircle} ${style.titlecircleup}`}>
            {text}
          </p>
          <h3 className={`${style.titlecircle} ${style.titlecircledown}`}>
            {title}
          </h3>
        </div>
      </div>
    </>
  );
}
