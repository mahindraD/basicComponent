import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function Chats({data}) {
  let count=1;

  return (
    <MDBTable bordered borderColor="primary" >
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Name</th>
          <th scope='col'>Last Message</th>
        </tr>
      </MDBTableHead>
      {data.map((f)=>(
        <MDBTableBody>
          <tr>
            <th scope='row'>{count++}</th>
            <td>{f.name}</td>
            <td>{f.message || f.lastMessage}</td>
          </tr>
        </MDBTableBody>
      ))}

    </MDBTable>
  );
}