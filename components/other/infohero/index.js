import { LineVertical } from "components/figure/poligons";

import style from "./style.module.scss";

export default function InfoHero({ title, text }) {
  return (
    <div className={style.boxinfohero}>
      <LineVertical />
      <div className={style.contentbox}>
        <span className={style.text}>{title}</span>
        <span className={`${style.text} opacity-50`}>{text}</span>
      </div>
    </div>
  );
}
