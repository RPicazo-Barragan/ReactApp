import React, { Component } from "react";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityMXN: 0,
      quantityDLS: 0,
    };
  }

  handleCurrencyInput({ target: { name, value } }) {
    console.log(name, value);
    let mxn, dls;
    if (name === "quantityMXN") {
      mxn = value;
      dls = mxn / 22.42;
    } else {
      (dls = value), (mxn = dls * 22.24);
    }
    this.setState({
      quantityMXN: mxn,
      quantityDLS: dls,
    });
  }

  render() {
    const { quantityMXN, quantityDLS } = this.state;
    <div>
      <form>
        <input type="number" name={} value={} onClick={}></input>
        <input type="number" name={} value={} onClick={}></input>
      </form>
    </div>;
  }
}

export default CurrencyConverter;
