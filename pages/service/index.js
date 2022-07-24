import Article from "components/article";
import Section from "components/sections";
import TableService from "components/table";

import article from "./article.module.scss";

import Head from "next/head";

export default function Service() {
  return (
    <>
      <Head>
        <title>Servicio UX/UI</title>
        <meta name="description" content="Servicio de diseño UX/UI" />
      </Head>

      <Section>
        <Article className={article.table}>
          <TableService />
        </Article>
      </Section>
    </>
  );
}
