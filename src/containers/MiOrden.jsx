import React, {useContext} from 'react'
import ItemOrden from '@components/ItemOrden'
import axios from 'axios';
import AppContext from '../context/AppContext';
import ruta_api from '@pages/Ruta';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '@styles/MiOrden.scss'

const MiOrden = () => {
    const {state} = useContext(AppContext);
    const {eliminarTodoDelCarrito} = useContext(AppContext);
    var total = 0;

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.precio);
        const sum = state.carrito.reduce(reducer, 0);
        total = sum.toFixed(2);
        return sum.toFixed(2);
    }      

    const handleCheckout = async() => {
        const listaSku = [];

        for (let i = 0; i < state.carrito.length; i++) {
            const objeto = state.carrito[i];
            if (objeto.sku) {
            listaSku.push({"sku":objeto.sku});
            }
        }

        const data = {
            "productos": listaSku,
            "total": total
        }

        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
        };

        const api_url = ruta_api.ip + ":" + ruta_api.port + "/apiuser/pedido";
        try {
            const pedido_response = await axios.post(api_url, data, config);
            if (pedido_response.status === 200) {
                toast.success("Pedido realizado con éxito");
                eliminarTodoDelCarrito();
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                toast.warning("Token no valido o ha expirado");
            }
            if (error.response && error.response.status === 500) {
                toast.error("Internal server error");
            }
        }
    }

    return (
        <aside className="MyOrder">
			<div className="title-container">
				<p className="title">Mi order</p>
			</div>
			<div className="my-order-content">
				{state.carrito.map(product => (
					<ItemOrden product = {product} key={`orderItem-${product.sku}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button" onClick={handleCheckout}>
					Checkout
				</button>
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
		</aside>
    );

}

export default MiOrden;