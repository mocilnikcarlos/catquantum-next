import style from "./style.module.scss";

export default function TitleWebLineShortRight({ placeholder }) {
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
}
