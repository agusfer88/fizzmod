import React, { Component, Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Formulario from "./widgets/Formulario";

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: ["perfil", "porfolio", "contacto"],
      contador: 0,
      mostrar: false,
      usuario: "",
      usuarios: []
    };
    this.aumentarContador = this.aumentarContador.bind(this);
    this.mostrarFormulario = this.mostrarFormulario.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  aumentarContador() {
    this.setState({ contador: this.state.contador + 1 });
  }
  mostrarFormulario() {
    this.setState({ mostrar: !this.state.mostrar });
  }

  handleChange(e) {
    this.setState({ usuario: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      usuarios: [...this.setState.usuarios]
    });
  }
  render() {
    let { links, contador, mostrar, usuario } = this.state;
    return (
      //en vez de encerrar todo en un div o en un array se usa fragment
      <Fragment>
        <Header links={links} />

        <p>Contador :{contador} </p>
        <button onClick={this.aumentarContador}>+</button>
        <div>
          {mostrar ? (
            <Formulario {...this.props.usuarios}>
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              usuario={usuario}
            </Formulario>
          ) : null}
          <button onClick={this.mostrarFormulario}>Mostrar/Ocultar</button>
        </div>
        <Main />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
