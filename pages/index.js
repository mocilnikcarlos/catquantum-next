import Article from "components/article";
import GlitchDesigner from "components/other/designerglitch";
import InfoHero from "components/other/infohero";
import MyName from "components/other/myname";
import Section from "components/sections";
import CardWork from "components/cards";

import Head from "next/head";

import style from "./style.module.scss";

import UserSpeak from "assets/svg/userSpeack";
import Idea from "assets/svg/idea";
import DataProt from "assets/svg/dataProt";
import AbTesting from "assets/svg/abTesting";
import { TitleWebLineShortRight } from "components/common/titleweb";

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

      <Section>
        <Article className={style.workux}>
          <TitleWebLineShortRight placeholder="El trabajo de un Designer UX" />
          <p className="textweb">
            En pocas palabras, un diseñador UX está encargado de lograr generar
            la mejor experiencia para el usuario. Tan simple y tan complejo a la
            vez, se necesitan de muchas herramientas, desde psicológicas hasta
            tecnológicas. Aun así, no solo es pensar en el usuario. Tener bien
            en claro cuál es el objetivo de la empresa también entra en estos
            requisitos, ya que será este el propósito que se verá reflejado en
            el usuario.
          </p>
          <div className={style.boxcards}>
            <CardWork
              title="Consultoría"
              text="Encontrar los problemas integrando análisis del producto escuchando a los usuarios"
              icon={<UserSpeak />}
            />
            <CardWork
              title="Ideación"
              text="Incluir las soluciones con herramientas de UX. Sitemap, Wireframes, User Flows"
              icon={<Idea />}
            />
            <CardWork
              title="Prototipado"
              text="La parte visual del proyecto haciéndose presencia la UI. Atraer al usuario con un diseño"
              icon={<DataProt />}
            />
            <CardWork
              title="Testing"
              text="La única manera de mejorar un producto es integrar medición y análisis con datos reales"
              icon={<AbTesting />}
            />
          </div>
          <p className="textweb">
            Para entrar en detalles de como se logra una buena experiencia de
            usuario primero hay que entender que este proceso es un bucle y que
            no acaba una vez obtenido un resultado. La sociedad avanza y con
            ella las necesidades. Quedarse con un solo resultado implica
            estancarse en un grupo reducido de personas, perdiendo así una gran
            cantidad de tráfico.
          </p>
        </Article>
      </Section>
    </>
  );
}
