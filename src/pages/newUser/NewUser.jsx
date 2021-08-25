import React from 'react';

import './new-user.css';

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Jon" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Jon Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="jonsmith12@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+62 823 1234 5678" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Samarinda, East Borneo" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserRadio">
            <input type="radio" name="gender" id="male" value="Male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="Female" />
            <label htmlFor="female">Male</label>
            <input type="radio" name="gender" id="other" value="Other" />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="active">Active</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
