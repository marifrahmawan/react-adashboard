import { Publish } from '@material-ui/icons';
import React from 'react';

import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';
import imageshoes from '../../image/nike-airmax.jpg';

import './product.css';

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
            grid={true}
          />
        </div>
        <div className="productTopRight">
          <div className="produdctInfoTop">
            <img src={imageshoes} alt="Product" className="productInfoImg" />
            <span className="productInfoName">Nike Airmax</span>
          </div>

          <div className="produdctInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales</span>
              <span className="productInfoValue">420</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active Status</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>

      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder="Nike Airmax" />
            <label>In Stock</label>
            <select name="inStock" id="inStock">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="productFormRight">
            <div className="productUpload">
              <label htmlFor="file">
                <Publish className="uploadIcon" />
              </label>
              <img
                src={imageshoes}
                alt="Product Upload"
                className="productUploadImg"
              />
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
