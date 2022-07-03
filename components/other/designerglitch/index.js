import style from "./style.module.scss";

export default function GlitchDesigner({ placeholder }) {
  return (
    <div className={style.herocontainer}>
      <h1
        className={`${style.hero} ${style.glitch} ${style.layers}`}
        data-text={placeholder}
      >
        <span className={style.titleglitchhero}>{placeholder}</span>
      </h1>
    </div>
  );
}
