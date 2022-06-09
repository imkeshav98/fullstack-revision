import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Login/Action";
import { Navigate } from "react-router-dom";

export default function LoginPg() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isAuthenticate } = useSelector((store) => store.login);

  const handleLogin = () => {
    dispatch(login({ username, password }));
  };

  if (isAuthenticate) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <label className="login">UserName</label>
      <input
        type="text"
        placeholder="Enter UserName"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <br />
      <label className="login">Password</label>

      <input
        type="text"
        placeholder="Enter Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
