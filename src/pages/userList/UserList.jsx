import React from 'react';

import { DataGrid } from '@material-ui/data-grid';

import './user-list.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full Name',
    sortable: true,
    width: 160,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    lastName: 'Susan',
    firstName: 'Sandra',
    age: 33,
    fullName: 'Susan Sandra',
  },
  {
    id: 2,
    lastName: 'Snow',
    firstName: 'Jon',
    age: 35,
    fullName: 'Jon Snow',
  },
  {
    id: 3,
    lastName: 'Edward',
    firstName: 'Newgate',
    age: 26,
    fullName: 'Edward Newgate',
  },
  {
    id: 4,
    lastName: 'Angeline',
    firstName: 'Natalie',
    age: 33,
    fullName: 'Natalie Angeline',
  },
];

export default function UserList() {
  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
