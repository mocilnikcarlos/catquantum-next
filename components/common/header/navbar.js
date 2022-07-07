// import dataNav from "helpers/dataNavLinks";
import BtnNavbar from "./btnNavbar";

import style from "./style.module.scss";

const getLink = {
  getNavLink: [
    {
      id: 1,
      target: "Inicio",
      to: "/",
    },
    {
      id: 2,
      target: "Servicio",
      to: "/service",
    },
    {
      id: 3,
      target: "Proyectos",
      to: "/projects",
    },
    {
      id: 4,
      target: "Sobre Mi",
      to: "/aboutme",
    },
    {
      id: 5,
      target: "Contacto",
      to: "/contact",
    },
  ],
};

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className={style.listlink}>
          {getLink.getNavLink.map((item) => (
            <li key={item.id}>
              <BtnNavbar placeholder={item.target} page={item.to} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
