/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
// Property community highlights component

import React from 'react'

const PropertyCommunity = (props) => {

  return (
    <div className="communityHighlights">
      <h2 className="serifFont blockTitle" data-reva-section="Highlights" id="sectionCommunityHighlights">Community Highlights</h2>
      <div id="lifeStyles">
        <div className="rw_communityHighlights" data-lifestyles="lifeStylesList" data-property-amenities="propertyAmenitiesList" data-layout-amenities="layoutAmenitiesList">
            <h3 className="serifFont rw_ch_title">LifeStyles</h3>
            <div className="rw_ch_lifestyles">
                <div data-c="lifeStyleIcon" data-icon=" lifeStyle.infographicName " data-display-name=" lifeStyle.displayName "></div>
            </div>
            <div data-c="lifeStylesPh"></div>
          <div className="rw_ch_divider"></div>
            <h3 className="serifFont rw_ch_title">Community Amenities</h3>
            <ul data-id="communityAmenitiesList" className="rw_ch_amenities">
                <li> amenity.displayName </li>
            </ul>
            <div data-c="amenitiesPh"></div>
          <div className="rw_ch_divider"></div>
            <h3 className="serifFont rw_ch_title">Floorplan Amenities</h3>
            <ul data-id="floorplanAmenitiesList" className="rw_ch_amenities">
                <li> amenity.displayName </li>
            </ul>
            <p className="rw_ch_smallPrint smallPrint">* Floorplans vary and may not include all the floorplan amenities</p>
            <div data-c="amenitiesPh"></div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCommunity
