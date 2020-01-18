import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { Services } from './Services'

export const RefconCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" height="300vh" src="https://moula.com.au/wp-content/uploads/2017/06/Tradie-Business-Loans-Moula-Feature.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Why us?</CardTitle>
          <CardSubtitle>We are a very COOL company aha</CardSubtitle>
          <CardText>please buy our airconditioners im going to lose the house</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export const RefconCard2 = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" height="300vh" src="https://workiz.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-13-at-21.36.23.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>Not sure?</CardTitle>
            <CardSubtitle>Not sure? Contact us for a free qoute!</CardSubtitle>
            <CardText>Click here for your free quote!</CardText>
            <Button>Qoute</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

  export const RefconCard3 = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" height="300vh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-8h6dXDypByKfrEkNo1fVGCgJHsbufXqFweayqaKT1-aT7Nlrw&s" alt="Card image cap" />
          <CardBody>
            <CardTitle>Our Promise.</CardTitle>
            <CardSubtitle>As a small business we pride our selves on our quality of service</CardSubtitle>
            <CardText>Come give us a call or an email.</CardText>
            <Button>Contact us</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

  export const ServiceCard = (props) => {
    const { services } = props
    {console.log(`Service card got ${services}`)}  
    return (
      <div>
        <Card>
          <CardImg top width="100%" height="300vh" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-8h6dXDypByKfrEkNo1fVGCgJHsbufXqFweayqaKT1-aT7Nlrw&s" alt="Card image cap" />
          <CardBody>
            <CardTitle>{services.name}</CardTitle>
            <CardSubtitle>{services.name}</CardSubtitle>
            <CardText>{services.name}</CardText>
            <Button><p>Find Out More</p></Button>
          </CardBody>
        </Card>
      </div>
    );
  };

  

export default Card;