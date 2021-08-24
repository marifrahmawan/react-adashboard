import {
  AttachMoney,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from '@material-ui/icons';
import React from 'react';

import './sidebar.css';

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarLisItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarLisItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarLisItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarLisItem">
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarLisItem">
              <Storefront className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarLisItem">
              <AttachMoney className="sidebarIcon" />
              Transaction
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebarList">
            <li className="sidebarLisItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarLisItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarLisItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarLisItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarLisItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarLisItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}