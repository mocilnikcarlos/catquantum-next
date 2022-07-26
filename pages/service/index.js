import Article from "components/article";
import Section from "components/sections";
import TableService from "components/table";

import article from "./article.module.scss";

import Head from "next/head";
import { ButtomService } from "components/botons";
import ContentBox from "components/common/box/contentbox";
import { TitleWebLineShortRight } from "components/common/titleweb";

const getButton = [
  {
    id: 1,
    placeholder: "Consultoría UX/UI",
    url: "/contact",
  },
  {
    id: 2,
    placeholder: "Contratación por proyecto",
    url: "/contact",
  },
  {
    id: 3,
    placeholder: "Contratación directa",
    url: "/contact",
  },
];

export default function Service() {
  return (
    <>
      <Head>
        <title>Servicio UX/UI</title>
        <meta name="description" content="Servicio de diseño UX/UI" />
      </Head>

      <Section>
        <Article className={article.service}>
          <TitleWebLineShortRight placeholder="Titulo?" />
          <ContentBox className={article.contentservice}>
            <TableService />
            <ContentBox className={article.boxbuttons}>
              {getButton.map((item) => (
                <ButtomService
                  key={item.id}
                  placeholder={item.placeholder}
                  url={item.url}
                />
              ))}
              {/* Falta agregar aca el texto que explica sobre mi contratacion */}
            </ContentBox>
          </ContentBox>
        </Article>
      </Section>
    </>
  );
}
