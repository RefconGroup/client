import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


export const RefconCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" height="300vh" src="https://workiz.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-13-at-21.36.23.png" alt="Card image cap" />
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
          <CardImg top width="100%" height="300vh" src="https://moula.com.au/wp-content/uploads/2017/06/Tradie-Business-Loans-Moula-Feature.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>Not sure?</CardTitle>
            <CardSubtitle>Not sure? Contact us for a free quote, whats the harm?</CardSubtitle>
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

  export const AboutCard = (props) => {
    return (
      <div>
        <Card>
          <CardImg top width="100%" height="300vh" src="http://refcon.com.au/images/asc_logo.png" alt="Card image cap" />
          <CardBody>
            <CardTitle>REFCON Group</CardTitle>
            <CardSubtitle>

The affordable specialists in commercial and residential air-conditioning solutions.

We are specialised in all type of commercial and residential air-conditioning including cold rooms, freezer rooms, cold display cabinets, drink fridges, related electrical works and much more.

We will guarantee high quality service with affordable solutions that keep our clients coming back.

We offer regular and general maintenance and repair work on most common makes and models including but not limited to Carrier, Daikin, Toshiba, Fujitsu, Mitsubishi, Samsung, and LG etc. System types include ducted unit, high-wall split systems, room air conditioners and much more.

</CardSubtitle>
            <CardText>Come give us a call or an email.</CardText>
            <Button>Contact us</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

export default Card;