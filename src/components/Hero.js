/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import React, { useEffect, useRef } from 'react'

function Hero(props) {

  const bgVideo = useRef(null)
  const searchBox = useRef(null)
  const marketsNavigation = useRef(null)
  const viewAllMarkets = useRef(null)
  const searchSection = useRef(null)

  useEffect(() => {

    window.Reva.ui.createBackgroundVideo(bgVideo.current, {
      src: props.heroMediaUrl,
      fallback: 'https://images.squarespace-cdn.com/content/v1/5c8aa8e6aadd341e9e874998/1566933616008-8FAIQ34HNVJYTVRHQWAM/ke17ZwdGBToddI8pDm48kLNZ-CjF0WUIJfEB5EIlIdMUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dpJRWtKXc3gBsYh8IoxoRqp5f4_-YvaDSxmCBRErK4IdCjLISwBs8eEdxAxTptZAUg/dylan+swimming+pool.png',
    });

    window.Reva.ui.createSearchBoxWidget(searchBox.current, {
      // inputclassNameName: 'ss-search-input', // use this to pass a classNameName for the input of the searchbox
      subContext: window.Reva.tracking.SubContexts.HOME_HERO_BLOCK,
      onSuggestionClick: function onSuggestionClick(args) {
        var url = args.url;
        window.Reva.navigator.navigateTo(url);
      }
    });

    window.Reva.ui.createNavigationWidget(marketsNavigation.current, {
      onNavigationItemClick: function onNavigationItemClick(args) {
        window.Reva.navigator.navigateTo(args.url);
      },
      elevatingMarketsLayout: true,
    });

    // window.Reva.ui.createMenuOverlay(viewAllMarkets.current, {
    //   document.querySelector(searchSection.current).setAttribute('data-visible', !isOpen);
    // });

  }, [searchBox, props.heroMediaUrl]);

  return(
    <div className="heroWrapper">
      <div id="bgVideo" ref={bgVideo} className="bgVideo" data-reva-root="true"></div>

      <div className="content">
        <div id="searchSection" ref={searchSection} className="blockWrapper">
          <h1 className="serifFont">{props.heroHeader}</h1>
          <h2>{props.heroSubHeader}</h2>
          <div id="searchBox" data-reva-root="true" ref={searchBox}></div>
          <div className="reva_homeLink" id="viewAllMarkets" ref={viewAllMarkets} data-overlay="#allMarketsSection">
            <p>View all markets</p>
          </div>
          <div className="homeArrowDown"></div>
        </div>
      </div>

      <div id="allMarketsSection" data-overlay-name="marketsSectionOverlay" className="reva-overlay markets-overlay-section">
        <div className="content">
          <div className="blockWrapper">
            <h1 className="serifFont">{props.heroHeader}</h1>
            <p>{props.heroSubHeader}</p>
            <div id="marketsNavigation" ref={marketsNavigation} data-reva-root="true"></div>
            <div className="reva_homeLink" data-cmd="closeOverlay">
              <p>Hide all markets</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    

  )
}

export default Hero
