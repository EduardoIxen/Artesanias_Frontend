import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Menu.scss';

const Menu = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.clear();
        navigate('/');
    }
    return (
        <div className='Menu'>
            <ul>
                <li>
                    <a>{localStorage.getItem('nombre')}</a>
                </li>
                <li>
                    <a href='/' onClick={handleSignOut}>Sign out</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;