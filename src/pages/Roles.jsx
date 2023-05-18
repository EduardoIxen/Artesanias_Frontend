import React from 'react';
import {useNavigate} from 'react-router-dom';
import '@styles/Roles.scss';

const Roles = () => {
    const navigate = useNavigate();

    const loginAdmin = () => {
        navigate('/loginadmin');
    }

    const loginUser = () => {
        navigate('/loginusr');
    }

    return (
        <div className='contenido-pantalla'>
            <h1 className='h1-rol'>Bienvenido: </h1>
            <nav className='nav-rol'>
                <ul className='ul-rol'>
                    <li className='li-rol'>
                        <span></span><span></span><span></span><span></span>
                        <button onClick={loginAdmin} className='boton-quien'>ADMINISTRADOR</button>
                    </li>
                    <li className='li-rol'>
                        <span></span><span></span><span></span><span></span>
                        <button onClick={loginUser} className='boton-quien'>USUARIO</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Roles;