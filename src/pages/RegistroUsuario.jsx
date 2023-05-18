import React, {useRef} from "react";
import axios from "axios";
import ruta_api from "./Ruta";
import "@styles/InicioAdmin.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RegistroUsuario = () => {
    const form = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = {
            nombre: formData.get("nombre"),
            email: formData.get("email"),
            contrasena: formData.get("contrasena"),
        };

        const config = {
            headers: {
                "Content-type": "application/json",
            },
        }

        const api_url = ruta_api.ip + ":" + ruta_api.port + "/apiuser/registro";

        try {
            const registro_response = await axios.post(api_url, data, config);

            if (registro_response.status === 200) {
                toast.success("Registro exitoso");
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1 segundo antes de redirigir
                navigate("/loginusr");
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                toast.error("El correo ingresado ya está en uso");
            }
            if (error.response && error.response.status === 500) {
                toast.error("Error al agregar el producto, error interno del servidor");
            }
        }
    }

  return (
    <div>
      <div className="login-ia">
        <div className="form-container-ia">
          <h1 className="title-ia">Registro de usuarios</h1>
          <form action="/" className="form-producto-ia" ref={form}>
            <div>
              <label htmlFor="nombre" className="label-ia">
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre del producto"
                className="input input-name"
              />
              <label htmlFor="email" className="label-ia">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@automatadg.com"
                className="input input-name"
              />
              <label htmlFor="contrasena" className="label-ia">
                Contraseña
              </label>
              <input
                type="password"
                name="contrasena"
                placeholder="***********"
                className="input input-name"
              />
            </div>
            <button
              type="submit"
              className="primary-button login-button"
              onClick={handleSubmit}
            >
              Registrarme
            </button>
          </form>
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

export default RegistroUsuario;
