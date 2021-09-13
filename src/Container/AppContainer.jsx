import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import CarouselMovie from "../Components/Carrousel/index.jsx";
import Peliculas from "../Components/Peliculas/Peliculas";

const AppContainer = () => {
  const [buscar, setBuscar] = useState("");
  const [categorias, setCategorias] = useState("todas");

  return (
    <>
      <Navbar item={setBuscar} categoria={setCategorias} />
      <CarouselMovie />
      <Peliculas category={categorias} buscar={buscar} />
    </>
  );
};

export default AppContainer;
