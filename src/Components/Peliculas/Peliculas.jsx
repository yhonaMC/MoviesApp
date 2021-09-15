import React, { useState, useEffect } from "react";
import Cards from "../Cards/index.jsx";
import "../../Styled/styled.css";
import { Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import { Input, H1 } from "../NewMovies/styled";

const Peliculas = ({ buscar, category }) => {
  let url = "";
  const [movie, setmovie] = useState([]);
  const [updateList, setUpdateList] = useState(false);
  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleOpenModal = () => setShow(true);
  const [dataModal, setDataModal] = useState([]);
  const [paginas, setPaginas] = useState(1);

  if (buscar.length) {
    url = "https://pelis-blockmaster.herokuapp.com/peliculas?title_like=";
  } else {
    url = `https://pelis-blockmaster.herokuapp.com/peliculas?_limit=8&_page=${paginas}`;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.put(
      `https://pelis-blockmaster.herokuapp.com/peliculas/` + dataModal.id,
      dataModal
    );
    if (response.status === 200) {
      Swal.fire(
        "Guardado",
        `La pelicula ${response.data.title} fue modificada`,
        "success"
      );
      handleCloseModal();
      setUpdateList(!updateList);
    } else {
      Swal.fire("Error!", "La pelicula no fue modificada", "error");
    }
  };

  useEffect(() => {
    fetch(`${url}${buscar}`)
      .then((response) => response.json())
      .then((data) => setmovie(data));
  }, [updateList, buscar]);

  // scroll
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resp) => setmovie([...movie, ...resp]));
  }, [paginas]);

  window.onscroll = function () {
    if (
      window.innerHeight + window.scrollY ===
      document.documentElement.offsetHeight
    ) {
      setPaginas(paginas + 1);
    }
  };

  const handleChangeModal = ({ target }) => {
    setDataModal({
      ...dataModal,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <div className="alingCard">
        {category == "todas"
          ? movie.map((movie) => (
              <Cards
                key={movie.id}
                List={movie}
                setUpdateList={setUpdateList}
                updateList={updateList}
                handleCloseModal={handleCloseModal}
                handleOpenModal={handleOpenModal}
                setDataModal={setDataModal}
              />
            ))
          : category == "mas"
          ? movie
              .filter((vote) => vote.vote_average > 7)
              .map((movie) => (
                <Cards
                  key={movie.id}
                  List={movie}
                  setUpdateList={setUpdateList}
                  updateList={updateList}
                  handleCloseModal={handleCloseModal}
                  handleOpenModal={handleOpenModal}
                />
              ))
          : movie
              .filter((vote) => vote.vote_average < 7)
              .map((movie) => (
                <Cards
                  key={movie.id}
                  List={movie}
                  setUpdateList={setUpdateList}
                  updateList={updateList}
                  handleCloseModal={handleCloseModal}
                  handleOpenModal={handleOpenModal}
                />
              ))}
      </div>

      <Modal show={show} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Actualizar Datos</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit} className="form">
          <Modal.Body>
            <div>
              <img
                className="divImg"
                src="https://res.cloudinary.com/yhonamc/image/upload/v1630813536/logo-blockBuster_h0gpdg.png"
                alt=""
              />
            </div>
            <H1 className="h3 mb-3 font-weight-normal">
              Añadir una Nueva Pelicula
            </H1>
            <Form.Label>Nombre</Form.Label>
            <Input
              type="text"
              placeholder="Nombre"
              name="title"
              value={dataModal.title}
              onChange={handleChangeModal}
              required
            />
            <Form.Label>Puntuacion</Form.Label>
            <Input
              type="number"
              placeholder="Puntuacion"
              name="vote_average"
              value={dataModal.vote_average}
              onChange={handleChangeModal}
              required
            />

            <Form.Label>Imagen</Form.Label>
            <Input
              type="text"
              placeholder="Url Imagen"
              name="poster_path"
              value={dataModal.poster_path}
              onChange={handleChangeModal}
              required
            />
            <Form.Label>Descripcion</Form.Label>
            <textarea
              id="textarea"
              name="overview"
              rows="5"
              cols="40"
              value={dataModal.overview}
              onChange={handleChangeModal}
            ></textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button className="Btn" onClick={handleCloseModal}>
              cerrar
            </Button>
            <Button className="BtnSuccess" type="submit">
              Guardar Cambios
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default Peliculas;
