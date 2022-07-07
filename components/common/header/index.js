// import Logo from "assets/svg/logo";
// import Link from "next/link";
// import Navbar from "./navbar";

import style from "./style.module.scss";
import useHeader from "hooks/useHeader";

export default function Header() {
  const navColor = useHeader();
  return (
    <header
      className={`${style.header} ${
        navColor ? style.scrollon : style.scrolloff
      }`}
    >
      {/* <div className={style.contentheader}>
        <Link href="/">
          <a>
            <Logo className={style.logo} />
          </a>
        </Link>
        <Navbar />
      </div> */}
    </header>
  );
}
