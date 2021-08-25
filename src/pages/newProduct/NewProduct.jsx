import React from 'react';

import './new-product.css';

export default function NewProduct() {
  return (
    <div className="newProduct">
      <div className="newProductWrapper">
        <h1 className="newProductTitle">New Product</h1>
        <form className="newProductForm">
          <div className="newProductItem">
            <label>Image</label>
            <input type="file" style={{ border: 'none' }} />
          </div>
          <div className="newProductItem">
            <label>Name</label>
            <input type="text" placeholder="Jon Snow" />
          </div>
          <div className="newProductItem">
            <label>Stock</label>
            <input type="number" placeholder="123" />
          </div>
          <div className="newProductItem">
            <label htmlFor="active">Active</label>
            <select name="active" id="active">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
