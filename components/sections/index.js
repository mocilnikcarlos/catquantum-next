import style from "./section.module.scss";

export default function Section({ children, className }) {
  return (
    <section className={`${style.boxsection} ${className}`}>{children}</section>
  );
}
