import React, { Component } from "react";
import Usuario from "./Usuario";

class ListadoUsuarios extends Component {
  render() {
    let { usuario, usuarios } = this.props;
    return <ul>{<Usuario />}</ul>;
  }
}
export default ListadoUsuarios;
