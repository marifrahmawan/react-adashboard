import React, { useState } from 'react';

import { DeleteOutline } from '@material-ui/icons';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from 'react-router-dom';

import { userRows } from '../../dummyData';
import './user-list.css';

export default function UserList() {
  const userColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User Name',
      width: 150,
      editable: false,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={params.row.avatar}
              alt="User Profile"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'E-Mail',
      width: 270,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: true,
      width: 120,
      editable: false,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      sortable: true,
      width: 150,
      editable: false,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={userDeleteHandler.bind(null, params.row.id)}
            />
          </>
        );
      },
    },
  ];

  const [data, setData] = useState(userRows);

  const userDeleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="userList">
      <div className="userListHeader">
        <h1 className="userListTitle">User List</h1>
        <Link to="/newUser">
          <button className="userListAddButton">Create</button>
        </Link>
      </div>
      <div className="userListTable">
        <DataGrid
          rows={data}
          columns={userColumns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
