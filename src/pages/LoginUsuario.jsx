import React, { useRef } from "react";
import ruta_api from "./Ruta";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/LoginAdmin.scss";

const LoginUsuario = () => {
  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
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
    }

    const api_url = ruta_api.ip + ":" + ruta_api.port + "/apiuser/login";

    try {
        const login_response = await axios.post(api_url, data, config);

        console.log(login_response.data);

        if (login_response.status === 200) {
          localStorage.setItem("token", login_response.data.token);
          localStorage.setItem("email", login_response.data.user.email);
          localStorage.setItem("nombre", login_response.data.user.nombre);
          localStorage.setItem("rol", "user");
          navigate("/inicioadmin");
        }
    } catch (error) {
        if (error.response && error.response.status === 401) {
            toast.error("Usuario o contraseña incorrectos");
          }
    }
  };

  return (
    <div className="login">
      <div className="form-container">
        <h1 className="h1-admin">Login Usuario</h1>
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
        <div className="button-design">
          <button
            className="secondary-button
                    signup-button"
            onClick={() => navigate("/registro")}
          >
            Regístrate
          </button>
        </div>
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

export default LoginUsuario;
