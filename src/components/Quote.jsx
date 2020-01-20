import React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Quote = (props) => {
  return (
    <div style={divStyle}>
    <Form>
      <FormGroup>
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
        <Input type="textarea"
        name="text"
        id="textField"
        placeholder="Provide a brief description of what you would like installed and the size of the space"
        />
      </FormGroup>
    </Form>
    </div>
  );
}

const divStyle = {
  marginRight: 0,
  marginLeft: 50,
  marginTop: 30,
};

export default Quote;