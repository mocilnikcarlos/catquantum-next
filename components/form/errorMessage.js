import formhome from "./formhome.module.scss";

export default function ErrorMessage({ message }) {
  return <p className={formhome.messageerror}>{message}</p>;
}
