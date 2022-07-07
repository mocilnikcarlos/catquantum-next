import Link from "next/link";

// import style from "./style.module.scss";

// Problemas con este componente al deployar
export default function BtnNavbar({ placeholder, page }) {
  return (
    <Link href={page}>
      <a>{placeholder}</a>
    </Link>
  );
}
