import Enzyme, { mount } from "enzyme";
import React from "react";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Pruebas en <LoginScreen />", () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrarse correctamente", () => {
    wrapper.find("button").prop("onClick")();
    expect(setUser).toHaveBeenLastCalledWith({
      id: 1234,
      name: "Oscar España",
    });
  });
});
