import React, { Component } from "react";
import md5 from "md5";
import Swal from "sweetalert2";
import "../../Styled/styled.css";
import {
  DivForm,
  Form,
  Input,
  H1,
  Botton,
  Paragraph,
  DivRegister,
} from "./styleLogin";
import { Link } from "react-router-dom";
const Url = "https://login-yhona.herokuapp.com/usuario";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      form: {
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

  handleSubmit = async (e) => {
    e.preventDefault();
  };

  iniciarSesion = async () => {
    const resp = await fetch(Url);
    const users = await resp.json();

    if (this.state.form.username, this.state.form.password !== "") {
      let verf = users.find(
        (usr) =>
          usr.username.toLowerCase() ===
            this.state.form.username.toLowerCase() &&
          usr.password === md5(this.state.form.password)
      );
      if (verf !== undefined) {
        Swal.fire(
          "Bienvenido",`${verf.nombre} ${verf.apellido_paterno}`,
          "success"
        );
        this.state.login.push(verf);
        localStorage.setItem("login", JSON.stringify(this.state.login));
        this.props.history.push("/peliculas");
      } else {
        alert("Usuario o contraseña invalida");
      }
    } else {
      alert("Debe llenar todos los campos");
    }
  };

  render() {
    return (
      <DivForm>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <img
              src="https://res.cloudinary.com/yhonamc/image/upload/v1630813536/logo-blockBuster_h0gpdg.png"
              alt=""
            />
          </div>

          <H1>Inicio de sesión</H1>

          <Input
            type="email"
            id="inputEmail"
            className="form-control mt-1"
            placeholder="Correo"
            required=""
            onChange={this.handleChange}
            name="username"
          />

          <Input
            type="Password"
            id="inputPassword"
            className="form-control mt-1"
            placeholder="Contraseña"
            required=""
            onChange={this.handleChange}
            name="password"
          />

          <Botton type="submit" onClick={this.iniciarSesion}>
            Ingresar
          </Botton>

          <DivRegister>
            <Paragraph>
              No tienes cuenta
              <Link to="/registro" className="meta">
                Registrate
              </Link>
            </Paragraph>
          </DivRegister>
        </Form>
      </DivForm>
    );
  }
}
