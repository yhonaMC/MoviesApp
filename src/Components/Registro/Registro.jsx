import React, { Component } from "react";
import md5 from "md5";
import axios from "axios";
import uuid from "react-uuid";
import "../../Styled/styled.css";
import {
  DivForm,
  Form,
  H1,
  Input,
  Botton,
  DivInicio,
  H3,
} from "../Login/styleLogin";
import { Link } from "react-router-dom";
const Url = "https://login-yhona.herokuapp.com/usuario";

export default class Registro extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      form: {
        id: "",
        apellido_paterno: "",
        apellido_materno: "",
        nombre: "",
        username: "",
        password: "",
      },
      login: [],
    };
  }

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubtmit = (e) => {
    e.preventDefault();
  };

  RegistroUsuario = async () => {
    const resp = await fetch(Url);
    const users = await resp.json();

    if (
      (this.state.form.nombre,
      this.state.form.apellido_paterno,
      this.state.form.apellido_materno,
      this.state.form.username,
      this.state.form.password !== "")
    ) {
      let verifi = users.find(
        (usrs) =>
          usrs.username.toLowerCase() === this.state.form.username.toLowerCase()
      );

      if (verifi !== undefined) {
        alert("Correo ya esta regitrado");
      } else {
        await axios
          .post(Url, {
            id: uuid,
            apellido_paterno: this.state.form.apellido_paterno,
            apellido_materno: this.state.form.apellido_materno,
            nombre: this.state.form.nombre,
            username: this.state.form.username,
            password: md5(this.state.form.password),
          })
          .then((response) => alert("Usuario registrado"))
          .catch((error) => {
            console.log(error.mensaje);
          });
      }

      const respon2 = await fetch(Url);
      const usr2 = await respon2.json();

      let verifitow = usr2.find(
        (usrs2) =>
          usrs2.username.toLowerCase() ===
          this.state.form.username.toLowerCase()
      );

      this.state.login.push(verifitow);
      localStorage.setItem("login", JSON.stringify(this.state.login));
      this.props.history.push("/");
    } else {
      alert("Debe llenar todos los campos");
    }
  };
  render() {
    return (
      <DivForm>
        <Form onSubmit={this.handleSubtmit}>
          <H1 className="h3 mb-3 font-weight-normal">Registrate</H1>
          <div>
            <img
              src="https://res.cloudinary.com/yhonamc/image/upload/v1630813536/logo-blockBuster_h0gpdg.png"
              alt=""
            />
          </div>

          <H3>Crea una cuenta</H3>

          <Input
            type="text"
            placeholder="Apellido paterno"
            name="apellido_paterno"
            className="form-control"
            autoComplete="off"
            onChange={this.handleChange}
          />

          <Input
            type="text"
            placeholder="Apellido materno"
            name="apellido_materno"
            className="form-control"
            autoComplete="off"
            required=""
            onChange={this.handleChange}
          />

          <Input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="nombre"
            required=""
            onChange={this.handleChange}
          />

          <Input
            type="email"
            name="username"
            className="form-control"
            placeholder="Email"
            required=""
            onChange={this.handleChange}
          />

          <Input
            type="Password"
            name="password"
            className="form-control"
            placeholder="Password"
            required=""
            onChange={this.handleChange}
          />
          <Botton type="submit" onClick={this.RegistroUsuario}>
            Register
          </Botton>

          <DivInicio>
            <Link to="/" className="meta">
              Si ya tienes cuenta Inicia Sesion
            </Link>
          </DivInicio>
        </Form>
      </DivForm>
    );
  }
}
