import Link from "next/link";
import buttonform from "./buttonform.module.scss";
import buttonservice from "./buttonservice.module.scss";

const ButtonForm = ({ type, children }) => {
  return (
    <>
      <button type={type} className={buttonform.button}>
        <span>{children}</span>
        <div className={buttonform.arrow}>
          <div
            className={`${buttonform.uparrow} ${buttonform.arrowefect}`}
          ></div>
          <div
            className={`${buttonform.downarrow} ${buttonform.arrowefect}`}
          ></div>
        </div>
      </button>
    </>
  );
};

const ButtomService = ({ placeholder, url }) => {
  return (
    <>
      <Link href={url}>
        <a className={buttonservice.button}>
          <span className={buttonservice.textbutton}>
            <div className={buttonservice.circle}></div>
            {placeholder}
          </span>
          <span className={`${buttonservice.row} ${buttonservice.off}`}>
            <div className={buttonform.arrow}>
              <div
                className={`${buttonform.uparrow} ${buttonform.arrowefect}`}
              ></div>
              <div
                className={`${buttonform.downarrow} ${buttonform.arrowefect}`}
              ></div>
            </div>
          </span>
        </a>
      </Link>
    </>
  );
};

export { ButtonForm, ButtomService };
