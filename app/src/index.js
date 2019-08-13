/*
1 tiene que siempre estar la variable en scope
2 un componende de react es una funcion
3 todos los componene tes de React tiene que retornar algo: 
    React.Component - string - DomNode
4 Todos los componentes de React tiene que ir en mayuscula sino lo toma como una etiqueta y la compila asi
5 los componentes para ejecutarlos van en JSX:
function App(){

}
*/
//ES6
import React from "react";
import ReactDOM from "react-dom";
import App from "./ui/layout/App";
import { Provider } from "react-redux";
import store from "./api/store";

//CommonJS
//const React = require("react")
//let App = () => <p>"Hola mundo"</p>;

/*function App() {
  return <p>"Hola mundo"</p>;
}
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
