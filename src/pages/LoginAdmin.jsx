import React, { useRef } from "react";
import ruta_api from "./Ruta";
import "../styles/LoginAdmin.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginAdmin = () => {
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      contrasena: formData.get("password"),
    };

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const api_url = ruta_api.ip + ":" + ruta_api.port + "/apiadmin/login";

    try {
      const login_response = await axios.post(api_url, data, config);

      if (login_response.status === 200) {
        localStorage.setItem("token", login_response.data.token);
        localStorage.setItem("email", login_response.data.usr.email);
        localStorage.setItem("nombre", login_response.data.usr.nombre);
        localStorage.setItem("rol", "admin");
        navigateToHomeAdmin();
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Usuario o contraseña incorrectos");
      }

      if (error.response && error.response.status === 500) {
        toast.error("Internal server error");
      }
    }
  };

  const navigateToHomeAdmin = () => {
    navigate("/inicioadmin");
  };

  return (
    <div className="login">
      <div className="form-container">
        <h1 className="h1-admin">Administrador</h1>
        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email" //name para que sea accesible desde el objeto formData
            placeholder="email@example.com"
            className="input input-email"
            required
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="*************"
            className="input input-password"
            required
          />
          <button
            type="submit"
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default LoginAdmin;
