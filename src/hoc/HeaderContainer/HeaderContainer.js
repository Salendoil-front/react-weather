import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './HeaderContainer.css'

const navStyle = {
  padding: '0px 40px'
}

class Header extends Component {
  state = {
    registr: false
  }

  render() {
    const {visibleFunc} = this.props;

    return (
      <header>
        <nav style={navStyle}>
          <div className="nav-wrapper">
            <NavLink to="/"><p className="brand-logo">Weather App</p></NavLink>
            <ul id="nav-mobile" className="right">
              <li><NavLink to="#" onClick={visibleFunc}> Sass </NavLink></li>
              <li><NavLink to="/authorization" className="a-navlink"> Components </NavLink></li>
              <li><NavLink to="/javascript" className="a-navlink"> JavaScript </NavLink></li>
              {
                this.state.registr
                ? <button>login</button>
                : null
              }
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
