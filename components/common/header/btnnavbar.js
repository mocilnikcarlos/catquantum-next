import Link from "next/link";

import style from "./style.module.scss";

// Problemas con este componente al deployar
export default function BtnNavbar({ placeholder, page }) {
  return (
    <Link href={page}>
      <a className={style.mask}>
        <div className={style.containerlink}>
          <span className={`${style.textlink} ${style.textup}`}>
            {placeholder}
          </span>
          <span className={`${style.textlink} ${style.textdown}`}>
            {placeholder}
          </span>
        </div>
      </a>
    </Link>
  );
}
