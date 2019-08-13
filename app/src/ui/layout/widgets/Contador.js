import React, { Component } from "react";
import { connect } from "react-redux";

class Contador extends Component {
  render() {
    <div>
      <p>Contador :{contador} </p>
      <button onClick={this.aumentarContador}>+</button>
    </div>;
  }
}
let mapStateToProps = function() {};
export default connect(
  mapStateToProps,
  null
)(Contador);
