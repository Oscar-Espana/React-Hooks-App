import React from "react";
import Enzyme, { mount } from "enzyme";
import AppRouter from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("Pruebas en <AppRouter />", () => {
  const user = {
    id: 1,
    name: "Oscar España",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("debe de mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
