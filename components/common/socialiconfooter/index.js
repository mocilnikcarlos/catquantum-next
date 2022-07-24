import style from "./style.module.scss";

export default function IconSocialFooter({ tooltip, src, url, tag }) {
  return (
    <>
      <li className={style.itemsocialfooter}>
        <span className={`${style.tooltipsocialfooter} ${style[`${tag}`]}`}>
          {tooltip}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener nofollow noreferrer"
          className={`${style.linksocialfooter} ${style[`${tag}`]}`}
        >
          {src}
        </a>
      </li>
    </>
  );
}
