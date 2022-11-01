/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import React, {createRef, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { useContentful } from 'react-contentful'
import './Subheader.css'

function Subheader() {
  let propertyLogo = null;
  const Reva = window.Reva
  const propertyLogoRef = createRef()
  const searchInfo = createRef()
  const searchBoxFilterHeader = createRef()
  const searchFiltersMenu = createRef()
  const btnFilters = createRef()
  const btnHamburguer = createRef()
  const params = useParams()
  console.log(params)
  // const propertyName = `${params.state}/${params.city}/${params.property}`
  const propertyName = 'colorado/denver/dylan-rino-apartments';
  console.log(propertyName)
  

  const { data } = useContentful({
    contentType: 'property',
    query: {
      'fields.slug[in]': propertyName,
    }
  });

  if(data) {
    propertyLogo = data.items[0].fields.propertyLogo 
  }

  console.log(propertyLogo)

  useEffect(() => {
    // searchInfo.current && Reva.ui.createSearchInfoWidget(searchInfo.current) TODO ask Roy, not existing
    // console.log(propertyLogo && propertyLogo.fields.file.url)
    // if(propertyLogo) window._reva_property_logo_url = propertyLogo.fields.file.url;
    window._reva_property_logo_url = '//images.ctfassets.net/ancl60ltbovv/64c1WglfKxF7nggj7bqaLD/c1aa6e0d14f774ebbcc2d0f2743dfcb8/Dylan_BlackLogo.png';
    propertyLogoRef.current && Reva.ui.createPropertyLogoWidget(propertyLogoRef.current, {
      scrollableParent: window.Reva.utils.getScrollingElement(),
      // triggerElement: document.querySelector('#revaPropertyTabs'),
      tenantLogoUrl: window._reva_tenant_logo_url,
      propertyLogoUrl: window._reva_property_logo_url,
    })
    searchBoxFilterHeader.current && Reva.ui.createSearchBoxFilterWidget(searchBoxFilterHeader.current)
    searchFiltersMenu.current && Reva.ui.createSearchFiltersWidget(searchFiltersMenu.current, {
      verticalMenu: !!"true",
    })
    // btnFilters.current && Reva.ui.createMenuOverlay(btnFilters.current, function(isOpen) {
    //   // return document
    //   //   .querySelector("#header")
    //   //   .setAttribute("data-menu-open", isOpen);
    // })
    // btnHamburguer.current && Reva.ui.createMenuOverlay(btnHamburguer.current, function (isOpen) {
    //   return document
    //     .querySelector("#header")
    //     .setAttribute("data-menu-open", isOpen);
    // });
  }, [Reva, searchInfo, searchBoxFilterHeader, searchFiltersMenu, btnFilters, btnHamburguer, propertyLogoRef])

  return (
    <>
    <div className="lightHeader shadowCaster" id="header">
        <div className="cWrapper headerBlock">
          <div ref={searchInfo}>
            <h1 className="headerText">CUSTOMEROLD searching for 'queryLabel'</h1>
          </div>
          <div id="propertyLogo" ref={propertyLogoRef}></div>
          <div className="searchBoxWrapper">
            <div
              data-c="searchBoxFilterHeader"
              ref={searchBoxFilterHeader}
            ></div>
            <div
              data-label="Back to top ↑"
              data-type="flat"
              data-w="button"
              id="backToTop"
            ></div>
          </div>
          <div id="filtersOverlay" className="reva-overlay">
            <div className="rw-slide">
              <button
                id="btnClose"
                className="RevaIconButton dark"
                data-cmd="closeOverlay"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6 19L12 13.4L6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19Z"
                  ></path>
                </svg>
              </button>
              <div className="filtersScrollArea">
                <div ref={searchFiltersMenu}></div>
              </div>
            </div>
          </div>
          <div className="navLinks">
            <div className="navigationLinks">
              <a tabIndex="{0}" href="/">Home</a>
              <a tabIndex="{0}" href="/about">About</a>
            </div>
          </div>
          <div
            id="btnHamburguer"
            ref={btnHamburguer}
            className="btn-trigger"
            data-overlay="#hamburguerOverlay"
          >
            <svg
              width="27"
              height="18"
              viewBox="0 0 28 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.5 3V0H27.5V3H0.5Z"></path>
              <path d="M0.5 10.5H27.5V7.5H0.5V10.5Z"></path>
              <path d="M0.5 18H27.5V15H0.5V18Z"></path>
            </svg>
          </div>
          <div id="hamburguerOverlay" className="reva-overlay">
            <div className="rw-slide">
              <button
                id="btnClose"
                className="RevaIconButton dark"
                data-cmd="closeOverlay"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6 19L12 13.4L6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19Z"
                  ></path>
                </svg>
              </button>
              <div className="navigationLinks">
                <a tabIndex="{0}" href="/">Home</a>
                <a tabIndex="{0}" href="/about">About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subheader
