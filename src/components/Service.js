import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';


export const ServiceCard = (props) => {
    const { service } = props
    {console.log(`Service card got ${service}`)}  
    return (
      <div>
        <Card>
          <CardImg top width="80vw" height="200vh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-8h6dXDypByKfrEkNo1fVGCgJHsbufXqFweayqaKT1-aT7Nlrw&s" alt="Card image cap" />
          <CardBody>
            <CardTitle>{service.name}</CardTitle>
            {/* <CardSubtitle>{service.description}</CardSubtitle> */}
            <CardText>{service.brief}</CardText>
            <Button><p>GET A QUOTE TODAY!!!</p></Button>
          </CardBody>
        </Card>
      </div>
    );
  };

export default ServiceCard