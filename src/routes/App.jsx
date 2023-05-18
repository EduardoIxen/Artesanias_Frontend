import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Roles from "@pages/Roles";
import LoginAdmin from "@pages/LoginAdmin";
import InicioAdmin from "@pages/InicioAdmin";
import LoginUsuario from "@pages/LoginUsuario";
import InicioUsr from "@pages/InicioUsr";
import RegistroUsuario from "@pages/RegistroUsuario";
import NotFound from "@pages/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Roles />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/inicioadmin" element={<InicioAdmin />} />
          <Route path="/loginusr" element={<LoginUsuario />} />
          <Route path="/iniciousr" element={<InicioUsr />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
