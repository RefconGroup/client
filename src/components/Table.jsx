import React from 'react';
import { Table } from 'reactstrap';

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
  
  export default Table;