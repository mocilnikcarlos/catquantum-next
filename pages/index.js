import Article from "components/article";
import GlitchDesigner from "components/other/designerglitch";
import InfoHero from "components/other/infohero";
import MyName from "components/other/myname";
import Section from "components/sections";
import {
  CardLines,
  CardWork,
  FirstCardDesigner,
  SecondCardDesigner,
} from "components/cards";
import {
  TitleWebLineShortLeft,
  TitleWebLineShortRight,
} from "components/common/titleweb";
import { Ark } from "components/figure/poligons";
import FormHome from "components/form/formhome";

import Head from "next/head";

import style from "./style.module.scss";

import UserSpeak from "assets/svg/userSpeack";
import Idea from "assets/svg/idea";
import DataProt from "assets/svg/dataProt";
import AbTesting from "assets/svg/abTesting";
import Design from "assets/svg/design";
import Pen from "assets/svg/pen";
import Search from "assets/svg/search";

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
        <Article className={style.boxarticle}>
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
          <div className={style.boxcardsworkdesigner}>
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

      <Section>
        <Article className={style.boxarticle}>
          <TitleWebLineShortLeft placeholder="Mejorando la experiencia del usuario" />
          <div className={style.boxcardsbetterux}>
            <CardLines
              title="User Interface"
              text="Diseños creativos, modernos a necesidad del producto. Desde sitios web, e-commerce, dashboard, etc"
              icon={<Design />}
            />
            <CardLines
              title="UX Writing"
              text="Llega a tus usuarios con un diálogo coherente, cohesivo y atractivo. Capturalos y haz que tu marca sea fácil de recordar"
              icon={<Pen />}
            />
            <CardLines
              title="UX Research"
              text="Búsqueda acorde a la necesidad de los usuarios, estudio exhaustivo de la competencia para brindar lo mismo y mejor de lo que ya está en el mercado"
              icon={<Search />}
            />
          </div>
        </Article>
        <Ark />
      </Section>

      <Section>
        <Article className={style.boxarticle}>
          <TitleWebLineShortRight placeholder="Pasión profesional" />
          <div className={style.boxsdemodesign}>
            <div className={style.boxcardsdemofirst}>
              <FirstCardDesigner
                title="dasdasdasd"
                text="asdasdasdasdasdas"
                src="prev01"
              />
              <FirstCardDesigner
                title="dasdasdasd"
                text="asdasdasdasdasdas"
                src="prev02"
              />
            </div>
            <div className={style.boxcardsdemosecond}>
              <SecondCardDesigner
                title="dasdasdasd"
                text="asdasdasdasdasdas"
                src="bghero"
              />
              <SecondCardDesigner
                title="dasdasdasd"
                text="asdasdasdasdasdas"
                src="prev02"
              />
              <SecondCardDesigner
                title="dasdasdasd"
                text="asdasdasdasdasdas"
                src="prev01"
              />
            </div>
          </div>
        </Article>
      </Section>

      <div className={style.boxform}>
        <h3 className={style.titleform}>Trabajemos juntos</h3>
        <FormHome />
      </div>
    </>
  );
}
