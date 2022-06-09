import "./App.css";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
// import {LoginPg} from "./Components/LoginPg";
import Login from "./Components/Login";
import TodosCreate from "../src/Components/TodosCreate";
import { useSelector } from "react-redux";
import TodosEdit from "./Components/TodosEdit";
import { Register } from "./Components/Register";

const PrivateRoute = ({ isAuthenticate, children }) => {
  return isAuthenticate ? children : <Navigate to={"/login"} />;
};

function App() {
  const navigate = useNavigate();
  const isAuthenticate = useSelector((store) => store.login.isAuthenticate);

  return (
    <div className="App">
      <h1>Redux hooks</h1>
      <div>
        {isAuthenticate === false ? (
          <button onClick={() => navigate("/register")}>Register</button>
        ) : null}
        {isAuthenticate === false ? (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        ) : null}
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/todos-create");
          }}
        >
          Tod-Dos
        </button>
      </div>

      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <Home />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/todos-create"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <TodosCreate />
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/todos/:id/edit"
          element={
            <PrivateRoute isAuthenticate={isAuthenticate}>
              <TodosEdit />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
