import { Visibility } from '@material-ui/icons';
import React from 'react';

import image1 from '../../image/profile-woman-1.jpg';
import './widget-sm.css';

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={image1} alt="New Member" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kebovich</span>
            <span className="widgetSmUserJob">Backend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>

      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={image1} alt="New Member" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kebovich</span>
            <span className="widgetSmUserJob">Backend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>

      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={image1} alt="New Member" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kebovich</span>
            <span className="widgetSmUserJob">Backend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>

      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={image1} alt="New Member" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kebovich</span>
            <span className="widgetSmUserJob">Backend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>

      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src={image1} alt="New Member" className="widgetSmImg" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Kebovich</span>
            <span className="widgetSmUserJob">Backend Developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
