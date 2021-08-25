import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { productRows } from '../../dummyData';

import './product-list.css';

export default function ProductList() {
  const [data, setData] = useState(productRows);

  const productDeleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const productColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Product Name',
      width: 340,
      editable: false,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img
              className="productListImg"
              src={params.row.image}
              alt="User Profile"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 150,
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
      field: 'price',
      headerName: 'Price',
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
            <Link to={'/product/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={productDeleteHandler.bind(null, params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productListHeader">
        <h1 className="productListTitle">Product List</h1>
        <Link to="/newProduct">
          <button className="productListAddButton">Create</button>
        </Link>
      </div>
      <div className="productListTable">
        <DataGrid
          rows={data}
          columns={productColumns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
