import React, {useRef} from "react";
import axios from "axios";
import NavbarAdmin from "@components/NavbarAdmin";
import ruta_api from "./Ruta";
import "@styles/InicioAdmin.scss";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InicioAdmin = () => {
    const form = useRef(null);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const data = {
            artesano: formData.get("artesano"),
            imagen: formData.get("imagen"),
            nombre: formData.get("nombre"),
            precio: formData.get("precio"),
            sku: formData.get("sku"),
        };

        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": localStorage.getItem("token"),
            },
        }

        const api_url = ruta_api.ip + ":" + ruta_api.port + "/apiadmin/agregarproducto";

        try {
            const add_response = await axios.post(api_url, data, config);

            if (add_response.status === 200) {
                toast.success("Producto agregado");
                form.current.reset();
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                toast.error("Token no valido o ha expirado");
            }
            if (error.response && error.response.status === 409) {
                toast.warning("El SKU ya está en uso");
            }
            if (error.response && error.response.status === 500) {
                toast.error("Error al agregar el producto, error interno del servidor");
            }
        }
    }

  return (
    <div>
      <NavbarAdmin />
      <div className="login-ia">
        <div className="form-container-ia">
          <h1 className="title-ia">Agregar Productos</h1>
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
              <label htmlFor="sku" className="label-ia">
                SKU
              </label>
              <input
                type="text"
                name="sku"
                placeholder="FC123456"
                className="input input-name"
              />
              <label htmlFor="artesano" className="label-ia">
                Artesano
              </label>
              <input
                type="text"
                name="artesano"
                placeholder="Nombre artesano"
                className="input input-name"
              />
              <label htmlFor="precio" className="label-ia">
                Precio
              </label>
              <input
                type="number"
                name="precio"
                placeholder="99.99"
                step="0.01"
                className="input input-name"
              />
              <label htmlFor="imagen" className="label-ia">
                Imagen (URL)
              </label>
              <input
                type="link"
                name="imagen"
                placeholder="https://www.example.com"
                className="input input-name"
              />
            </div>
            <button
              type="submit"
              className="primary-button login-button"
              onClick={handleSubmit}
            >
              Agregar
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

export default InicioAdmin;
