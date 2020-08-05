import React from "react";

//CSS Reactstrap
import { Badge } from "reactstrap";

function Greet(props) {
  return (
    <div>
      <p>
        Hola {props.firstName} {props.lastName}{" "}
        <Badge color="secondary">Functional Component </Badge>
      </p>
    </div>
  );
}

export default Greet;
