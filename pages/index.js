import Article from "components/article";
import GlitchDesigner from "components/other/designerglitch";
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
          <GlitchDesigner placeholder="DESIGNER UX/UI" />
        </Article>
      </Section>
    </>
  );
}
