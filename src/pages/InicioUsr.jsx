import React from 'react';
import ListaProductos from '../containers/ListaProductos';
import NavbarUsr from '../components/NavbarUsr'

const InicioUsr = () => {

    return (
        <div>
            <NavbarUsr />
            <ListaProductos />
        </div>
    );
}

export default InicioUsr;