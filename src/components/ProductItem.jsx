import React, {useContext} from 'react';
import AppContext from '../context/AppContext';
import '@styles/ProductItem.scss';

import bt_add_to_cart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({producto}) => {
	const {agregarAlCarrito} = useContext(AppContext);

    const handleClick = (item) => {
		agregarAlCarrito(item);
    }

    return(
        <div className="ProductItem">
			<img src={producto.imagen} alt={producto.nombre} />
			<div className="product-info">
				<div>
					<p>Q{producto.precio}</p>
					<p>{producto.nombre}</p>
				</div>
				<figure onClick={() => handleClick(producto)}>
					<img src={bt_add_to_cart} alt="" className='img-puntero'/>
				</figure>
			</div>
		</div>
    );
}

export default ProductItem;