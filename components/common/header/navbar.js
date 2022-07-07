// import dataNav from "helpers/dataNavLinks";
import BtnNavbar from "./btnNavbar";

import style from "./style.module.scss";

const getLink = [
  { id: 1, target: "home", page: "/" },
  { id: 2, target: "service", page: "/service" },
  { id: 3, target: "project", page: "/project" },
  { id: 4, target: "aboutme", page: "/aboutme" },
  { id: 5, target: "contact", page: "/contact" },
];

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className={style.listlink}>
          {getLink.map((item) => (
            <li key={item.id}>
              <BtnNavbar placeholder={item.target} page={item.page} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
