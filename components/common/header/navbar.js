import Link from "next/link";

import style from "./style.module.scss";

const getNavLink = [
  { id: 1, target: "Inicio", page: "/" },
  { id: 2, target: "Servicio", page: "/service" },
  { id: 3, target: "Proyectos", page: "/project" },
  { id: 4, target: "Sobre Mi", page: "/aboutme" },
  { id: 5, target: "Contacto", page: "/contact" },
];

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className={style.listlink}>
          {getNavLink.map((item) => (
            <li key={item.id}>
              <Link href={item.page}>
                <a className={style.linknav}>{item.target}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
