import React from "react";

const LoginPage = () => {
  return (
    <div>
      <label htmlFor="">
        Podja login <input type="text" />
      </label>
      <label htmlFor="">
        Podja hasło <input type="password" />
      </label>
      <button>Zaloguj</button>
    </div>
  );
};

export default LoginPage;
