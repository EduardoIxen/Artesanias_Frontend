import React from 'react'
import ruta_api from '../pages/Ruta';
import ProductItem from '../components/ProductItem';
import useGetProductos from '../hooks/useGetProductos';
import '@styles/ListaProductos.scss';


const ListaProductos = () => {
    const API = ruta_api.ip + ":" + ruta_api.port + "/apiuser/productos";

    const productos = useGetProductos(API);

    return(
        <section className='main-container'>
            <div className='ProductList'>
                {productos.map((producto) => (
                    <ProductItem key={producto.sku} producto={producto} />
                ))}
            </div>
        </section>
    );

}

export default ListaProductos;