import React from 'react';

import { NotificationsNone, Language, Settings } from '@material-ui/icons/';

import './topbar.css';
import image1 from '../../image/profile-man-1.jpg';

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ADashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={image1} alt="Profile" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
