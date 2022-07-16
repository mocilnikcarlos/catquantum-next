import style from "./style.module.scss";

export default function Button({ type, children }) {
  return (
    <>
      <button type={type} className={style.button}>
        <span>{children}</span>
        <div className={style.arrow}>
          <div className={`${style.uparrow} ${style.arrowefect}`}></div>
          <div className={`${style.downarrow} ${style.arrowefect}`}></div>
        </div>
      </button>
    </>
  );
}
