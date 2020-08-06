import React, { Component } from "react";
import { Badge, Container, Button } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
      counter: 1,
      value: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("3,acomponent has mounted");

    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    }, 1000);

    setInterval(() => {
      this.setState({
        color: "success",
      });
    }, 3000);
  }

  handleClick() {
    console.log("Me clickearon desde un metodo!!");
    let { value } = this.state;
    if (value === true) {
      value = false;
      this.setState({
        value,
      });
      console.log("Estado", value);
    } else {
      value = true;
      this.setState({
        value,
      });
      console.log("Estado", value);
    }
  }

  render() {
    let colorState = this.state.value;
    let color;
    if (colorState === true) {
      color = "primary";
    } else {
      color = "success";
    }

    return (
      <>
        <h1>
          <Badge color={this.state.color}>{this.state.date}</Badge>
        </h1>
        <h1>
          <Badge color={color}>Cambio al click!</Badge>
        </h1>
        <Container>
          <p>{this.state.counter}</p>
          <Button onClick={this.handleClick}>Click me!</Button>
        </Container>
      </>
    );
  }
}

export default Clock;
