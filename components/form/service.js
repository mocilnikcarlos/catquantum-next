import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const controlForm = () => {
  const [result, setResult] = useState(false);
  const ref = useRef(null);

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_3qrj58n",
        "template_2ew240f",
        ref.current,
        "YYbhmX2LXnJvoThKA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .catch((error) => console.log("Error en catch", error));
    ref.current.reset();
    setResult(true);
  };

  return { ref, onSubmit, result };
};

export default controlForm;
