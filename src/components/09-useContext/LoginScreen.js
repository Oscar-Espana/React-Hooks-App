import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const HomeScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login Screen </h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 1234,
            name: "Oscar España",
          })
        }
      >
        Login
      </button>
    </div>
  );
};

export default HomeScreen;
