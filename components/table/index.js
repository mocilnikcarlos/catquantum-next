import AbTestingTable from "assets/svg/abtextingtable";
import ChatTable from "assets/svg/chattable";
import DesignLineTable from "assets/svg/designtable";
import PrototipeTable from "assets/svg/prototipetable";
import SearchTable from "assets/svg/searchtable";
import tableservice from "./tableservice.module.scss";

const getRow = [
  {
    id: 1,
    src: <SearchTable />,
    text: "Metodologías de investigación con base en puntos cualitativos y cuantitativos, etnografía, estudios de usabilidad, focus group y más.",
  },
  {
    id: 2,
    src: <ChatTable />,
    text: "Entrevista a usuarios para capturar las dolencias de cada uno acorde a la finalidad de la empresa.",
  },
  {
    id: 3,
    src: <AbTestingTable />,
    text: "A/B Testing acorde a las necesidades de la empresa, producto o servicio llevando a cabo soluciones reales.",
  },
  {
    id: 4,
    src: <DesignLineTable />,
    text: "Diseños de wireframe de baja y alta calidad de todo el sitio web o aplicación.",
  },
  {
    id: 5,
    src: <PrototipeTable />,
    text: "Prototipo de navegación. Simulación del recorrido de la web o aplicación.",
  },
];

const RowTable = ({ content, img }) => {
  return (
    <>
      <div className={`${tableservice.boxrow} ${tableservice.itemlist}`}>
        {img}
        <span className={tableservice.text}>{content}</span>
      </div>
      <div className={tableservice.line}></div>
    </>
  );
};

export default function TableService() {
  return (
    <div className={tableservice.boxtable}>
      <div className={`${tableservice.titlerow} ${tableservice.boxrow}`}>
        <h3 className={tableservice.title}>Cat Quantum</h3>
        <span className={tableservice.text}>
          Creación de soluciones en los puntos de contacto entre los usuarios y
          tu empresa
        </span>
      </div>
      <ul>
        {getRow.map((item) => (
          <li key={item.id} className={tableservice.li}>
            <RowTable img={item.src} content={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
}
