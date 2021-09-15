import axios from "axios";
import React, { useState } from "react";
import {
  DivForm,
  Form,
  Input,
  DivButton,
  ButtonForm,
  H1,
  DivImg,
} from "./styled";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const NewMovies = () => {
  const [data, setData] = useState({
    title: "",
    vote_average: "",
    overview: "",
    poster_path: "",
  });
  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const history = useHistory();

  const url = "https://pelis-blockmaster.herokuapp.com/peliculas?title_like=";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(url, data);
    if (response.status === 201) {
      Swal.fire(
        "Guardado!",
        `La pelicula ${response.data.title} fue agregada`,
        "success"
      );
      history.push("/peliculas");
    } else {
      Swal.fire("Error!", "La pelicula no fue agregada", "error");
    }
  };

  return (
    <DivForm>
      <Form onSubmit={handleSubmit}>
        <DivImg>
          <img
            src="https://res.cloudinary.com/yhonamc/image/upload/v1630813536/logo-blockBuster_h0gpdg.png"
            alt=""
          />
        </DivImg>
        <H1 className="h3 mb-3 font-weight-normal">
          Añadir una Nueva Pelicula
        </H1>

        <Input
          type="text"
          placeholder="Nombre"
          name="title"
          value={data.title}
          onChange={handleChange}
          required
        />

        <Input
          type="number"
          placeholder="Puntuacion"
          name="vote_average"
          value={data.vote_average}
          onChange={handleChange}
          required
        />

        <Input
          type="text"
          placeholder="Url Imagen"
          name="poster_path"
          value={data.poster_path}
          onChange={handleChange}
          required
        />

        <textarea
          id="textarea"
          name="overview"
          rows="5"
          cols="40"
          value={data.overview}
          onChange={handleChange}
        ></textarea>

        <DivButton>
          <ButtonForm>Agregar</ButtonForm>
        </DivButton>
        <Link to="/peliculas" className="volver">
          Volver
        </Link>
      </Form>
    </DivForm>
  );
};

export default NewMovies;
