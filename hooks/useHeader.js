import { useEffect, useState } from "react";

const useHeader = () => {
  const [navColor, setnavColor] = useState();

  const changeBackground = () => {
    window.pageYOffset > 5 ? setnavColor(true) : setnavColor(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return navColor;
};

export default useHeader;
