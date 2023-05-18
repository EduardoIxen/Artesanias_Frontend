import React, { useState, useContext } from "react";
import Menu from '@components/Menu';
import AppContext from "../context/AppContext";
import MiOrden from "../containers/MiOrden";
import "@styles/Navbar.scss";
import shoping_cart from "@icons/icon_shopping_cart.svg";

const HeaderUsr = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {state} = useContext(AppContext);

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
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            {localStorage.getItem("email")}
          </li>
          <li className="navbar-shoping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoping_cart} alt="" />
            {state.carrito.length && state.carrito.length  > 0 ? <div className="num-prods">{state.carrito.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu/>}
      {toggleOrders && <MiOrden/>}
    </nav>
  );
};

export default HeaderUsr;
