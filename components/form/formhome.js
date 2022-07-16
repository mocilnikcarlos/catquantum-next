// import { useEffect } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Button from "components/botons";

import controlForm from "./service";
import validationForm from "./validation";
import ErrorMessage from "./errorMessage";

import formhome from "./formhome.module.scss";

export default function FormHome() {
  const {
    handleSubmit,
    register,
    formState,
    reset,
    formState: { errors },
  } = useForm();

  const { ref, onSubmit, result } = controlForm();

  const { controlInputName, controlInputEmail, controlInputMessage } =
    validationForm();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ username: "", email: "", message: "" });
    }
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} ref={ref} className={formhome.form}>
      <div className={formhome.boxinputs}>
        <fieldset className={formhome.fieldset}>
          <input
            className={
              errors.username
                ? `${formhome.input} ${formhome.errorinput}`
                : `${formhome.input}`
            }
            placeholder="Nombre*"
            {...register("username", { ...controlInputName })}
          />
          <legend
            className={
              errors.username
                ? `${formhome.legend} ${formhome.errorlegend}`
                : `${formhome.legend}`
            }
          >
            Nombre*
          </legend>
          {errors.username ? (
            <ErrorMessage message={errors.username.message} />
          ) : null}
        </fieldset>

        <fieldset className={formhome.fieldset}>
          <input
            className={
              errors.email
                ? `${formhome.input} ${formhome.errorinput}`
                : `${formhome.input}`
            }
            placeholder="Email*"
            {...register("email", { ...controlInputEmail })}
          />
          <legend
            className={
              errors.email
                ? `${formhome.legend} ${formhome.errorlegend}`
                : `${formhome.legend}`
            }
          >
            Email*
          </legend>
          {errors.email ? (
            <ErrorMessage message={errors.email.message} />
          ) : null}
        </fieldset>
      </div>

      <div className={formhome.boxtextarea}>
        <fieldset className={formhome.fieldsetarea}>
          <textarea
            className={
              errors.message
                ? `${formhome.inputextarea} ${formhome.resize} ${formhome.errorinput}`
                : `${formhome.inputextarea} ${formhome.resize}`
            }
            placeholder="Dejame tu mensaje*"
            {...register("message", { ...controlInputMessage })}
          />
          <legend
            className={
              errors.message
                ? `${formhome.legendarea} ${formhome.errorlegend}`
                : `${formhome.legendarea}`
            }
          >
            Dejame tu mensaje*
          </legend>
          {errors.message ? (
            <ErrorMessage message={errors.message.message} />
          ) : null}
        </fieldset>
      </div>

      <div className={formhome.buttontext}>
        {result ? (
          <p className={formhome.successform}>
            Gracias por ponerte en contacto conmigo. Estaré respondiéndote lo
            más rápido posible.
          </p>
        ) : (
          <Button type="submit">Enviar mensaje</Button>
        )}
      </div>
    </form>
  );
}
