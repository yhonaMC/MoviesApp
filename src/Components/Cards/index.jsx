import React, { useState, useEffect } from "react";
import {
  MovieCards,
  MovieImg,
  Points,
  Header,
  Img,
  Body,
  Botton,
  Bottons,
} from "./style";
import { Modal, ModalFooter } from "reactstrap";
import "../../Styled/styled.css";
import axios from "axios";
import Swal from "sweetalert2";

const Cards = (
  {
    setUpdateList,
    updateList,
    handleCloseModal,
    handleOpenModal,
    setDataModal,
    List,
  },
  props
) => {
  const Url = "https://pelis-blockmaster.herokuapp.com/peliculas";
  const [trailer, setTrailer] = useState("");
  const [viewtrailer, setViewTrailer] = useState(false);
  const opentrailer = () => setViewTrailer(!viewtrailer);
  const [modal, setModal] = useState(false);
  const openView = () => setModal(!modal);
  const { poster_path, id, title, overview, vote_average } = List;

  const handleEdit = () => {
    handleOpenModal();
    setDataModal(List);
  };

  const handleDelete = () => {
    Swal.fire({
      title: `Esta seguro que desea eliminar la Pelicula?`,
      text: "Esta accion no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${Url}/${id}`).then((response) => {
          if (response.status === 200) {
            Swal.fire(
              "Eliminado!",
              `Se Elimino La Pelicula ${response.data.title}`,
              "success"
            );
            setUpdateList(!updateList);
          } else {
            Swal.fire(
              "Error!",
              "Hubo un error al eiminar la apelicula ",
              "error"
            );
          }
        });
      }
    });
  };

  useEffect(() => {
    if (id) {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0ca79cfff3d14ef15bb56bac5dad90f8&language=es-ES`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setTrailer(data.results[0]);
        });
    }
  }, [id]);

  return (
    <MovieCards onClick={openView}>
      <Points>
        <img
          src="https://i.ibb.co/kK3Ljn2/estrella.png"
          alt={title}
          width="14px"
        />
        {vote_average}
      </Points>
      <MovieImg src={"https://image.tmdb.org/t/p/w500" + poster_path} />

      <Modal
        isOpen={modal}
        toggle={openView}
        contentClassName="bgBlack"
        size={"lg"}
      >
        <div className="divPrimary">
          <Img src={"https://image.tmdb.org/t/p/w500" + poster_path} />
          <div>
            <Header toggle={openView}>{title}</Header>
            <Body>{overview}</Body>
            <div className="divPrincipal">
              {!viewtrailer && (
                <div className="divSecundario">
                  <Bottons onClick={opentrailer} className="btn">
                    Ver Trailer
                  </Bottons>
                </div>
              )}
              <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/" + trailer?.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>

        <ModalFooter>
          <Botton className="btn" color="secondary" onClick={openView}>
            Cerrar
          </Botton>
          <Botton className="btn" color="secondary" onClick={handleEdit}>
            Editar
          </Botton>
          <Botton className="btn" color="secondary" onClick={handleDelete}>
            Eliminar
          </Botton>
        </ModalFooter>
      </Modal>
    </MovieCards>
  );
};

export default Cards;
