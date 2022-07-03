import { LineHorizontal } from "components/figure/poligons";
import style from "./style.module.scss";

export default function MyName({ placeholder }) {
  return (
    <div className={style.boxmyname}>
      <LineHorizontal />
      <span className={style.textmyname}>{placeholder}</span>
    </div>
  );
}
