import React, { useState, useContext } from "react";
import Menu from '@components/Menu';
import "@styles/Navbar.scss";
import shoping_cart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <div className="navbar-left">
        <ul>
          <li>
            Artesanías
          </li>
          <li>
            <a href="">Agregar Productos</a>
          </li>
          <li>
            <a href="">Ordenes</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            {localStorage.getItem("email")}
          </li>
        </ul>
      </div>
      {toggle && <Menu/>}
    </nav>
  );
};

export default Header;
