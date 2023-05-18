import React, { useState, useContext } from "react";
import Menu from '@components/Menu';
//import AppContext from "../context/AppContext";
//import MyOrder from "../containers/MyOrder";
import "@styles/Navbar.scss";
import shoping_cart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  //const {state} = useContext(AppContext);

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
          <li className="navbar-shoping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoping_cart} alt="" />
            {/* {state.cart.length && state.cart.length  > 0 ? <div>{state.cart.length}</div> : null} */}
          </li>
        </ul>
      </div>
      {toggle && <Menu/>}
      {toggleOrders && <MyOrder/>}
    </nav>
  );
};

export default Header;
