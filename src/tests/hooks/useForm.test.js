import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Oscar",
    email: "espaaoscar@gmail.com0",
  };

  test("debe de regresar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;
    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toEqual("function");
    expect(typeof reset).toEqual("function");
  });

  test("debe de cambiar el valor del formulario (cambiar name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Oscar",
        },
      });
    });

    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: "Oscar" });
  });

  test("debe de re-establecer el formulario con RESET", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Oscar",
        },
      });

      reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
