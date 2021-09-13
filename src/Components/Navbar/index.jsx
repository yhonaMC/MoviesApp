import React from "react";
import { List, Nav, Divimg, DivInput, Input } from "./styled";
import { Link } from "react-router-dom";

const Navbar = ({ item, categoria }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    item(e.target.value);
  };

  const buscarCategoria = (e) => {
    categoria(e.target.name);
  };

  return (
    <Nav>
      <Divimg>
        <img
          src="https://res.cloudinary.com/yhonamc/image/upload/v1630813536/logo-blockBuster_h0gpdg.png"
          alt=""
        />
      </Divimg>
      <List>
        <li className="listcolor">
          <a name="todas" onClick={buscarCategoria}>
            Todas
          </a>
        </li>
        <li className="listcolor">
          <a name="mas" onClick={buscarCategoria}>
            Mas valoradas
          </a>
        </li>
        <li to="" className="listcolor">
          <a name="menos" onClick={buscarCategoria}>
            Menos valoradas
          </a>
        </li>
        <Link to="agregar" className="listcolor">
          Añadir
        </Link>
      </List>

      <form action="" onSubmit={handleSubmit}>
        <DivInput>
          <Input type="text" placeholder="Buscar" onChange={handleChange} />
        </DivInput>
      </form>
    </Nav>
  );
};

export default Navbar;
