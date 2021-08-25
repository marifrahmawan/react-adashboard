import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import image1 from '../../image/profile-woman-1.jpg';

import './user.css';

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={image1} alt="User Profile" className="userShowTopImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Anna Kebovich</span>
              <span className="userShowTitle">Backend Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowDetails">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowInfoIcon" />
              <span className="userShowInfoTitle">annakb9</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowInfoIcon" />
              <span className="userShowInfoTitle">29 Oct 1998</span>
            </div>

            <span className="userShowDetails">Contact Details</span>

            <div className="userShowInfo">
              <MailOutline className="userShowInfoIcon" />
              <span className="userShowInfoTitle">anna_k99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowInfoIcon" />
              <span className="userShowInfoTitle">+62 823 1234 567</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowInfoIcon" />
              <span className="userShowInfoTitle">Samarinda, East Borneo</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form action="#" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label htmlFor="Username">Username</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="annakb9"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="Full Name">Full Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Anna Kebovich"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="E-Mail">E-Mail</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="anna_k99@gmail.com"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="Phone">Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+62 823 1234 567"
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Samarinda, East Borneo
                  "
                />
              </div>
              <div className="userUpdateItem">
                <label htmlFor="Birth Day">Birth Day</label>
                <input type="date" className="userUpdateInput" />
              </div>
            </div>

            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src={image1}
                  alt="Update Profile Pic"
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="userpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
