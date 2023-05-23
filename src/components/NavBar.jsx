import React from 'react';
import planet from './images/planet.png';

import './NavBar.css';

const Nav = () => (
  <>
    <div className="NavDiv">
      <div className="NavImg">
        <img src={planet} width="50px" height="50px" alt="" />
        <div className="TitleNav"> Space travelers Hubs</div>
      </div>
      <nav>
        <ul>
          <li>Rokets</li>
          <li>Missions</li>
          <div className="Interline" />
          <li>My Profile</li>
        </ul>
      </nav>
    </div>
    <hr />
  </>
);

export default Nav;
