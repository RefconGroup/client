import React from 'react';
import { Table, Button, ButtonGroup} from 'reactstrap';
import {removeService} from '../services/serviceServices';


export const FooterTable = (props) => {
    return (
      <Table>
          <tbody>
          <tr>
            <th scope="row"></th>
            <td>Phone</td>
            <td>+61 420 691 337</td>
        
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Email</td>
            <td>epicgames@gmail.com</td>
          </tr>
        </tbody>
      </Table>
    );
  }

  export const AdminTable = (props) => {

    const { service} = props

        function deleteService(id) {
          // Delete the service on the server
          removeService(id).catch((error) => {
            console.log(`An error occurred deleting the service: ${error}`)
          })};

    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Brief</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
    <th scope="row">{service.name}</th>
            <td>{service.brief}</td>
            <td>
                <ButtonGroup>
                <Button><p>EDIT</p></Button>
                <Button  onClick={() => deleteService(service._id)}><p>DELETE</p></Button>
                </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }

  export default Table;