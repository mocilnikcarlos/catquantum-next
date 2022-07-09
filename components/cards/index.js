import work from "./work.module.scss";
import line from "./line.module.scss";
import img from "./img.module.scss";
import EyeCard from "assets/svg/eye";

const CardWork = ({ title, text, icon }) => {
  return (
    <>
      <div className={work.boxcircledesign}>
        <div className={work.contentcircledesign}>
          <div className={work.iconcircle}>
            <div className={work.icon}>{icon}</div>
          </div>
          <p className={`${work.titlecircle} ${work.titlecircleup}`}>{text}</p>
          <h3 className={`${work.titlecircle} ${work.titlecircledown}`}>
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};

const CardLines = ({ icon, title, text }) => {
  return (
    <>
      <div className={line.cardline}>
        <span className={line.linehover}></span>
        <span className={line.linehover}></span>
        <span className={line.linehover}></span>
        <span className={line.linehover}></span>
        <div className={line.contentcardline}>
          <div className={line.contenttitlecardline}>
            <div className={line.iconcardline}>{icon}</div>
            <p className={line.titlecardline}>{title}</p>
          </div>

          <p className={line.textcardline}>{text}</p>
        </div>
      </div>
    </>
  );
};

const FirstCardDesigner = ({ title, text, src }) => {
  return (
    <>
      <div className={img.imgcardfirst}>
        <div className={img.boxeye}>
          <span className={img.iconeye}>
            <EyeCard />
          </span>
        </div>
        <div className={img[`${src}`]}></div>
        <div className={img.textcard}>
          <h3 className={img.titleupcard}>{title}</h3>
          <p className={img.titledowncard}>{text}</p>
        </div>
      </div>
    </>
  );
};

const SecondCardDesigner = ({ title, text, src }) => {
  return (
    <>
      <div className={img.imgcardsecond}>
        <div className={img.boxeye}>
          <span className={img.iconeye}>
            <EyeCard />
          </span>
        </div>
        <div className={img[`${src}`]}></div>
        <div className={img.textcard}>
          <h3 className={img.titleupcard}>{title}</h3>
          <p className={img.titledowncard}>{text}</p>
        </div>
      </div>
    </>
  );
};

export { CardLines, CardWork, FirstCardDesigner, SecondCardDesigner };
