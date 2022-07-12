import { useForm } from "react-hook-form";

const validationForm = () => {
  useForm();

  const controlInputName = {
    required: {
      value: true,
      message: "Este campo es obligatorio",
    },
    pattern: {
      value:
        /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ']+$/u,
      message: "Solo caracteres alfabéticos",
    },
    maxLength: {
      value: 30,
      message: "El nombre es demasiado largo",
    },
    validate: {
      hasValidateFormat: (username) => {
        const pattern = /^\s+$/;
        if (pattern.test(username)) {
          return "El campo no puede estar vació";
        }
      },
    },
  };

  const controlInputEmail = {
    pattern: {
      value:
        /^[a-zA-Z0-9\u00F1\u00D1\u00C0-\u017F.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g,
      message: "Formato de email invalido",
    },
    required: {
      value: true,
      message: "Este campo es obligatorio",
    },
    maxLength: {
      value: 40,
      message: "El email es demasiado largo",
    },
    validate: {
      hasValidateFormat: (email) => {
        const pattern = /^\s+$/;
        if (pattern.test(email)) {
          return "No se permiten espacios";
        }
      },
    },
  };

  const controlInputMessage = {
    required: {
      value: true,
      message: "Este campo es obligatorio",
    },
    minLength: {
      value: 10,
      message: "El mensaje es muy corto",
    },
    validate: {
      hasValidateFormat: (email) => {
        const pattern = /^\s+$/;
        if (pattern.test(email)) {
          return "Escribe algo";
        }
      },
    },
  };

  return {
    controlInputName,
    controlInputEmail,
    controlInputMessage,
  };
};

export default validationForm;
