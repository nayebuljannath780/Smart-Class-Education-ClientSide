import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Our Address</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Street South North</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Courses</h4>
            <ui className="list-unstyled">
              <li>B.Com</li>
              <li>m.Com</li>
              <li>BBA</li>
              <li>Account</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Recent Posts</h4>
            <ui className="list-unstyled">
              <li>Preparation Strategy for SSC</li>
              <li>New Pattern of SSC-CGL brings </li>
              <li>How to manage time for SSC</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SMART CLASS EDUCATION | All rights reserved |
              Terms Of Service | Privacy
            </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;