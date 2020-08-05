import React from "react";

//CSS Reactstrap
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function PrintPost(props) {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="50%"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/daniel-ricciardo-of-australia-and-renault-sport-f1-poses-news-photo-1584292995.jpg?crop=1.00xw:0.334xh;0,0.0578xh&resize=1200:*"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.tittle}</CardTitle>
          <CardSubtitle>{props.subtittle}</CardSubtitle>
          <CardText>{props.content}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default PrintPost;
