// import Logo from "assets/svg/logo";
import BehanceFooter from "assets/svg/behancefooter";
import FacebookFooter from "assets/svg/facebookfooter";
import GitHubFooter from "assets/svg/githubfooter";
import GmailFooter from "assets/svg/gmailfooter";
import LinkedinFooter from "assets/svg/linkedinfooter";
import Logo from "assets/svg/logo";
import WhatsAppFooter from "assets/svg/whatsappfooter";

import { FigFooter } from "components/figure/poligons";
import IconSocialFooter from "../socialicon";

import style from "./style.module.scss";

const getLinkSocial = [
  {
    id: 1,
    url: "https://www.behance.net/carlosmocilni",
    tag: "be",
    tooltip: "carlosmocilni",
    src: <BehanceFooter />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/carlosmocilnik/",
    tag: "in",
    tooltip: "carlosmocilnik",
    src: <LinkedinFooter />,
  },
  {
    id: 3,
    url: "https://github.com/mocilnikcarlos",
    tag: "git",
    tooltip: "mocilnikcarlos",
    src: <GitHubFooter />,
  },
  {
    id: 4,
    url: "https://wa.me/543487345472/?text=Quiero%20ponerme%20en%20contacto%20con%20usted",
    tag: "whats",
    tooltip: "3487 345472",
    src: <WhatsAppFooter />,
  },
  {
    id: 5,
    url: "www.google.com",
    tag: "gmail",
    tooltip: "carlosmocilnik",
    src: <GmailFooter />,
  },
  {
    id: 6,
    url: "https://www.facebook.com/profile.php?id=100074214987236",
    tag: "face",
    tooltip: "Carlos Mocilnik",
    src: <FacebookFooter />,
  },
];

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.boxsocial}>
        <FigFooter />
      </div>
      <div className={style.contentfooter}>
        <div className={style.logofooter}>
          <Logo />
          <p className={style.aboutcqd}>
            Cat Quantum Design es un proyecto personal para mostrar mis
            habilidades, brindar mi servicio como Diseñador UX/UI.
          </p>
        </div>
        <nav className={style.navsocial}>
          <ul className={style.listnavfooter}>
            {getLinkSocial.map((item) => (
              <IconSocialFooter
                key={item.id}
                tooltip={item.tooltip}
                src={item.src}
                url={item.url}
                tag={item.tag}
              />
            ))}
          </ul>
          <p className={style.textcopy}>
            Sitio web diseñado y desarrollado por Carlos Mocilnik | Cat Quantum
            Design
          </p>
        </nav>
      </div>
    </footer>
  );
}
