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

export default RefconCard;