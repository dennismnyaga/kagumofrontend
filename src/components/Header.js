import React from 'react';
import logo from './download3.svg';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import "./Header.css"


function Header() {
  return <div>
      <BrowserView className='header-browser'>
        <h1>This is rendered only in browser</h1>
        <img src={logo} alt="Logo" />;
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
  </div>;
}

export default Header;
