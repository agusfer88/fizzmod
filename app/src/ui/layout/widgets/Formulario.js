import React, { Component, Fragment } from "react";
import ListadoUsuarios from "./Usuario";

class Formulario extends Component {
  render() {
    return (
      <Fragment>
        <input placeholder="usuario" />
        <button>Guardar</button>

        <ListadoUsuarios />
      </Fragment>
    );
  }
}
export default Formulario;
