import React from 'react';

import './widget-lg.css';

import image1 from '../../image/profile-man-1.jpg';
import image2 from '../../image/profile-woman-1.jpg';

const Button = (props) => {
  const { type } = props;
  return <button className={'widgetLgButton ' + type}>{type}</button>;
};

export default function WidgetLg() {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={image1} alt="User Profile" className="widgetLgImg" />
            <span className="widgetLgName">Bob Sudino</span>
          </td>
          <td className="widgetLgDate">24 Aug 2021</td>
          <td className="widgetLgAmount">$2,221</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={image2} alt="User Profile" className="widgetLgImg" />
            <span className="widgetLgName">Susan Sandra</span>
          </td>
          <td className="widgetLgDate">24 Aug 2021</td>
          <td className="widgetLgAmount">$2,221</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={image2} alt="User Profile" className="widgetLgImg" />
            <span className="widgetLgName">Susan Sandra</span>
          </td>
          <td className="widgetLgDate">24 Aug 2021</td>
          <td className="widgetLgAmount">$2,221</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src={image2} alt="User Profile" className="widgetLgImg" />
            <span className="widgetLgName">Susan Sandra</span>
          </td>
          <td className="widgetLgDate">24 Aug 2021</td>
          <td className="widgetLgAmount">$2,221</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
}
