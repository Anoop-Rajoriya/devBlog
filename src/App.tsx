import React from "react";
import { Button } from "./components/ui/button";
import auth from "./services/auth";

const App = () => {
  const { signup, getCurrentUser, login, logout } = auth;
  const user = {
    name: "demo",
    email: "demo@gmail.com",
    password: "demo1234",
  };

  return (
    <div className="min-h-screen bg-background dark">
      <Button
        onClick={() => {
          signup(user)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        }}
      >
        signup
      </Button>
      <Button
        onClick={() => {
          login({ email: user.email, password: user.password })
            .then(console.log)
            .catch(console.log);
        }}
      >
        login
      </Button>
      <Button onClick={()=>{
        logout().then(console.log).catch(console.log)
      }}>logout</Button>
      <Button
        onClick={() => {
          getCurrentUser()
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        }}
      >
        get login user
      </Button>
    </div>
  );
};

export default App;
