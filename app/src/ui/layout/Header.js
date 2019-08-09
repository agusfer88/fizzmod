import React, { Component, Fragment } from "react";

class Header extends Component {
  render() {
    console.log(this);
    return (
      <Fragment>
        <h1>SPA</h1>
        <nav>
          {this.props.links.map(link => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>
      </Fragment>
    );
  }
}
export default Header;
