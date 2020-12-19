import React from "react";
import AppRouter from "./AppRouter";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  const user = {
    id: 1234,
    name: "Oscar Espana",
    email: "espaaoscar@gmail.com",
  };

  return (
    <UserContext.Provider value={user}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default HomeScreen;
