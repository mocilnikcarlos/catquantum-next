import Article from "components/article";
import GlitchDesigner from "components/other/designerglitch";
import InfoHero from "components/other/infohero";
import MyName from "components/other/myname";
import Section from "components/sections";

import Head from "next/head";

import style from "./style.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Quantum Design</title>
        <meta name="description" content="Servicio de diseño UX/UI" />
      </Head>

      <Section className={style.hero}>
        <Article className={style.contenthero}>
          <MyName placeholder="Yo soy Carlos Alberto Mocilnik" />
          <GlitchDesigner placeholder="DESIGNER UX/UI" />
          <div className={style.infohero}>
            <InfoHero title="Argentina" text="Zarate - Buenos Aires" />
            <InfoHero title="Freelancer" text="Designer and Dev. Front-End" />
          </div>
        </Article>
      </Section>
    </>
  );
}
