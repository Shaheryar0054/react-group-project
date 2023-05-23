import React from 'react';
import {
  BrowserRouter as Router, NavLink, Routes, Route,
} from 'react-router-dom';
import planet from './images/planet.png';
import Rockets from './Rockets';
import Missions from './Missions';
import Myprofile from './Myprofile';
import '../styles/NavBar.css';

const Nav = () => (
  <Router>
    <header id="header-container">
      <div className="NavDiv">
        <div className="NavImg">
          <img src={planet} width="50px" height="50px" alt="" />
          <h2>Space travelers Hubs</h2>
        </div>

        <nav id="nav-container">
          <ul>
            <li>
              <NavLink to="/rockets" activeClassName="active">
                Rockets
              </NavLink>
            </li>
            <li>
              <NavLink to="/missions" activeClassName="active">
                Missions
              </NavLink>
            </li>
            <hr className="pages-line" />
            <li>
              <NavLink to="/profile" activeClassName="active">
                My Profile
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </header>
    <Routes>
      <Route path="/rockets" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Myprofile />} />
    </Routes>
  </Router>
);

export default Nav;
