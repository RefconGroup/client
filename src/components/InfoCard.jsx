import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  export function InfoCard({img, cap, title, subtitle, body, button})
  {
    return (
    <div>
      <Card>
        <CardImg top width="100%" height="300vh" src={img} alt={cap}/>
        <CardBody>
          <CardTitle><h5>{title}</h5></CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <CardText>{body}</CardText>
          <Button>{button}</Button>
        </CardBody>
      </Card>
    </div>
  );
  };

export default InfoCard