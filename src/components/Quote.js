import React from 'react';
import { Form, FormGroup, Input, Container, Label } from 'reactstrap';

const Quote = (props) => {
  return (
    <div>
    <Form>
    <Container fluid="xl" style={{backgroundColor: "#AFFFF0"}}>
      <FormGroup style={{paddingTop: 20}}>
      <Label for="userEmail">GET A QUOTE TODAY!!!</Label>
        <Input
          type="email"
          name="email"
          id="userEmail"
          placeholder="E-Mail"
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="string"
          name="number"
          id="phNumber"
          placeholder="Phone Number"
        />
      </FormGroup>
      <FormGroup>
        <Input type="select" name="select" id="selector">
          <option>choose a service...</option>
          <option>Air-Conditioning</option>
          <option>Refrigeration</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Input
        type="textarea"
        name="text"
        id="textField"
        placeholder="Provide a brief description of what you would like installed and the size of the space"
        style={{paddingBottom: "32vh"}}
        />
        <Label />
      </FormGroup>
      </Container>
    </Form>
    </div>
  );
}

export default Quote;