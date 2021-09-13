import React from 'react'
import AppContainer from '../Container/AppContainer';
import Login from "../Components/Login/Login"
import Registro from "../Components/Registro/Registro"
import NewMovies from '../Components/NewMovies/NewMovies';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/peliculas" component={AppContainer} />
        <Route exact path="/agregar" component={NewMovies} />
      </Switch>
    </Router>
  )
}

export default Routes


