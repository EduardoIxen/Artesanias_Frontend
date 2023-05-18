import React, {useContext} from 'react'
import AppContext from '../context/AppContext';
import '../styles/ItemOrden.scss'

import closeIcon from '@icons/icon_close.png';

const ItemOrden = ({product}) => {
	const { eliminarDelCarrito } = useContext(AppContext);

	const handleRemove = product => {
		eliminarDelCarrito(product);
	}

    return (
        <div className="OrderItem">
			<figure>
				<img src={product.imagen} alt={product.nombre} />
			</figure>
			<p>{product.nombre}</p>
			<p>${product.precio}</p>
			<img src={closeIcon} alt="close" onClick={() => handleRemove(product)} />
		</div>
    )
}

export default ItemOrden;