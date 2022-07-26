import style from "./style.module.scss";

export default function ContentBox({ children, className }) {
  return <div className={`${style.contentbox} ${className}`}>{children}</div>;
}
