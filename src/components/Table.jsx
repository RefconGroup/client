import React from 'react';
import { Table, Button, ButtonGroup} from 'reactstrap';


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

        const { service } = props
    
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
                <Button><p>DELETE</p></Button>
                </ButtonGroup>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
  
  export default Table;