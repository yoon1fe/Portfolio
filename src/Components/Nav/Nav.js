import React, { Component } from 'react';
import './Nav.css';
import imgSrc from './img.png';

class Nav extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      desktop: true,
      showMenu: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  showMenu(event) {
    event.preventDefault();
    if (this._isMounted) {
      this.setState({
        showMenu: true
      }, () => {
        document.addEventListener('click', this.closeMenu);
      })
    }
  }

  closeMenu() {
    if (this._isMounted) {
      this.setState({
        showMenu: false
      }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }
  
  render() {
    return (
      <div className="nav-class">
          <img src={imgSrc} alt="myLogo" className="nav-logo"/>
          <ul>
            <li className="nav-li" onClick={() => {
              document.getElementById('home').scrollIntoView();
            }}>Home</li>
            <li className="nav-li" onClick={() => {
              document.getElementById('aboutMe').scrollIntoView();
            }}>About Me</li>
            <li className="nav-li" onClick={() => {
              document.getElementById('pjt').scrollIntoView();
            }}>Projects</li>
            <li className="nav-li" onClick={() => {
              document.getElementById('contact').scrollIntoView();
            }}>Contact</li>
          </ul>
        
      </div>
    )
  }


};



export default Nav;