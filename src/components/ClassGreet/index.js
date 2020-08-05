import React, { Component } from "react";

class ClassGreet extends Component {
  render() {
    return <p>hola {this.props.lastName} </p>;
  }
}

export default ClassGreet;
