import style from "./style.module.scss";

const TitleWebLineShortRight = ({ placeholder }) => {
  return (
    <>
      <div className={style.boxtitleweb}>
        <h2 className={style.titleweb}>{placeholder}</h2>
        <div className={style.linerow}>
          <div className={style.linerowleft}></div>
          <div className={style.linerowright}></div>
        </div>
      </div>
    </>
  );
};

const TitleWebLineShortLeft = ({ placeholder }) => {
  return (
    <>
      <div className={style.boxtitleweb}>
        <h2 className={style.titleweb}>{placeholder}</h2>
        <div className={`${style.linerow} ${style.reverseline}`}>
          <div className={style.linerowleft}></div>
          <div className={style.linerowright}></div>
        </div>
      </div>
    </>
  );
};

export { TitleWebLineShortRight, TitleWebLineShortLeft };
