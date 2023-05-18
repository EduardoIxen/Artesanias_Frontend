import React, {useContext} from 'react'
import ItemOrden from '@components/ItemOrden'
import AppContext from '../context/AppContext';
import '@styles/MiOrden.scss'

const MiOrden = () => {
    const {state} = useContext(AppContext);
    var total = 0;

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + parseFloat(currentValue.precio);
        const sum = state.carrito.reduce(reducer, 0);
        total = sum.toFixed(2);
        return sum.toFixed(2);
    }      

    const handleCheckout = () => {
        const listaSku = [];

        for (let i = 0; i < state.carrito.length; i++) {
            const objeto = state.carrito[i];
            if (objeto.sku) {
            listaSku.push({"sku":objeto.sku});
            }
        }

        console.log(listaSku);
        console.log(total);
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
		</aside>
    );

}

export default MiOrden;