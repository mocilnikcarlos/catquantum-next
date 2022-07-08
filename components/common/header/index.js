import Logo from "assets/svg/logo";

import Link from "next/link";

import style from "./style.module.scss";
import useHeader from "hooks/useHeader";
import Navbar from "./navbar";

export default function Header() {
  const navColor = useHeader();
  return (
    <header
      className={`${style.header} ${
        navColor ? style.scrollon : style.scrolloff
      }`}
    >
      <div className={style.contentheader}>
        <Link href="/">
          <a aria-label="Cat Quantum Design">
            <Logo className={style.logo} />
          </a>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
