import React, { Component, Fragment } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: ["perfil", "porfolio", "contacto"],
      contador: 0
    };
    this.aumentarContador = this.aumentarContador.bind(this);
  }
  aumentarContador() {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    let { links, contador } = this.state;
    return (
      //en vez de encerrar todo en un div o en un array se usa fragment
      <Fragment>
        <Header links={links} />
        <p>Contador :{contador} </p>
        <button onClick={this.aumentarContador}>+</button>
        <Main />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
