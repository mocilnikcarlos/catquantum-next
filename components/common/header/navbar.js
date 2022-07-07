import dataNav from "helpers/dataNavLinks.json";
import BtnNavbar from "./btnNavbar";

import style from "./style.module.scss";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className={style.listlink}>
          {dataNav.getNavLink.map((item) => (
            <li key={item.id}>
              <BtnNavbar placeholder={item.target} page={item.to} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
