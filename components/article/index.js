import style from "./style.module.scss";

export default function Article({ children, className }) {
  return (
    <article className={`${style.boxarticle} ${className}`}>{children}</article>
  );
}
