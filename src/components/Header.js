/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import React from 'react';
import './Header.css';

function Header() {

  // const [isOpen, handleOpenMenu] = useState(true);
  
  // const toggleMenu = () => {
  //   handleOpenMenu(!isOpen)
  // }

  return (

  <>
    <div className="homeHeader" id="header" data-cast-shadow="false">
      <div className="cWrapper headerBlock">
        <div className="navLinks">
          <div className="navigationLinks">
            <a tabIndex="{0}" href="/" className="revaCurrentPath">Home</a>
            <a tabIndex="{0}" href="/about">About</a>
          </div>
        </div>
        <img id="logo" alt="logo" className="logo" src="/logo192.png" />
      </div>
      <div id="btnHamburguer" className="btn-trigger" data-overlay="#hamburguerOverlay">
        <svg width="27" height="18" viewBox="0 0 28 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 3V0H27.5V3H0.5Z"></path>
          <path d="M0.5 10.5H27.5V7.5H0.5V10.5Z"></path>
          <path d="M0.5 18H27.5V15H0.5V18Z"></path>
        </svg>
      </div>
      <div id="hamburguerOverlay" className="reva-overlay">
        <div className="rw-slide">
          <button id="btnClose" className="RevaIconButton dark" data-cmd="closeOverlay">
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6 19L12 13.4L6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19Z"></path>
            </svg>
          </button>
          <div className="navigationLinks">
            <a tabIndex="{0}" href="/" className="revaCurrentPath">Home</a>
            <a tabIndex="{0}" href="/about">About</a>
          </div>
        </div>
      </div>

      {/* <script>
        Reva.ui.createMenuOverlay('#btnHamburguer', function (isOpen) {
          return document.querySelector('#header').setAttribute('data-menu-open', isOpen);
        });
      </script> */}
      
   </div>

  </>

    
  )
}

export default Header



    // <div className="lightHeader shadowCaster" id="header" data-menu-open={isOpen}>
    //   <div className="cWrapper headerBlock">
    //     <img id="logo" className="logo" alt={"logo"} />
    //     <div className="navLinks">
    //       <div className="navigationLinks">
    //         <a tabIndex={0} href="/">Home</a>
    //         <a tabIndex={0} href="/residents">Residents</a>
    //         <a tabIndex={0} href="/about">About</a>
    //       </div>
    //     </div>
    //     <div id="btnHamburguer" className="btn-trigger" data-overlay="#hamburguerOverlay">
    //       <svg width="27" height="18" viewBox="0 0 28 18" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M0.5 3V0H27.5V3H0.5Z"></path>
    //         <path d="M0.5 10.5H27.5V7.5H0.5V10.5Z"></path>
    //         <path d="M0.5 18H27.5V15H0.5V18Z"></path>
    //       </svg>
    //     </div>
    //     <div id="hamburguerOverlay" className="reva-overlay" onClick={() => toggleMenu()}>
    //       <div className="rw-slide">
    //         <button id="btnClose" className="RevaIconButton dark" data-cmd="closeOverlay">
    //           <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //             <path d="M17.6 19L12 13.4L6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19Z"></path>
    //           </svg>
    //         </button>
    //         <div className="navigationLinks">
    //           <a tabIndex={0} href="/">Home</a>
    //           <a tabIndex={0} href="/residents">Residents</a>
    //           <a tabIndex={0} href="/about">About</a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>