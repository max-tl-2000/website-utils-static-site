/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import React from 'react'

const PropertyInfo = (props) => {

  const { store } = props;

  const { currentPropertyStore: propertyStore = {} } = store;
  const { queryLabel, property = {} } = propertyStore;
  const { 
    phone: propertyPhone, formattedLongAddress, marketRent = {}, 
    team: { hours: teamOfficeHours } = {}, 
    officeHours, 
    smsEnabled 
  } = property;
  const propertyStartingPrice = marketRent.min;
  const propertyStartingPriceString = marketRent.min ? `Starting at ${propertyStartingPrice} (check availability)` : '';

  const propertyObject = {
    propertyOfficeHours: officeHours || teamOfficeHours,
    queryLabel,
    propertyPhone,
    smsEnabled,
    propertyAddress: formattedLongAddress,
    propertyStartingPriceString,
    storeLoading: propertyStore.loading,
  }

  if(propertyObject.storeLoading) return <div data-c="propertyDetailsPlaceholder"></div>;

  return (
    <div className="propertyInfo">
      <div className="rw_propertyDetails" id="propertyDetails">
        <div className="rw_smallLayout"
          data-property-phone={ propertyObject.propertyPhone }
          data-property-address={ propertyObject.propertyAddress }
        >
          <div data-c="searchBox"></div>
          <div className="rw_propertyDetails_info">
            <p className="rw_propertyDetails_infoPrice bold text">{ propertyObject.propertyStartingPriceString }</p>
            <p className="text">{ propertyObject.propertyAddress }</p>
            <p className="text">Office Hours:
              { propertyObject.propertyOfficeHours && propertyObject.propertyOfficeHours.Friday.endTime }</p>
          </div>
          <div className="rw_propertyDetail_actions">
            <span data-c="btnLinkTo" data-label="Explore the map" data-target=".exploreSection" data-type="flat"></span>
            <span data-c="btnContactUs" data-label="contact us"></span>
            <span data-c="btnShareURL" data-label="Share"></span>
            <span data-c="socialMediaIcons" />
          </div>
          {propertyObject.propertyPhone && <span className="phoneBtn" data-c="labelPhone" data-phone={ propertyObject.propertyPhone }></span>}
          <div className="rw_btn_find_your_apartment" style={{ paddingBottom: 10 }}>
            <div data-big="true" data-c="scheduleATour" data-label="Schedule a tour"></div>
          </div>
          <div className="rw_btn_find_your_apartment">
            <div data-big="true" data-c="btnLinkTo" data-label="Find Your New Home" data-target=".findYourApartment"></div>
          </div>
        </div>
        
        <div className="rw_mediumLayout">
          <div className="rw_propertyDetails_top">
            <div data-c="searchBox"></div>
            <div style={{ display: 'inline-flex' }}>
              <div data-id="btnScheduleATour" data-big="true" data-c="scheduleATour" data-label="Schedule a tour"></div>
              <div data-big="true" data-c="btnLinkTo" data-id="btnFindYourApartment"  data-label="Find Your New Home" data-target=".findYourApartment"></div>
            </div>
          </div>
          <div className="propertyDetails_content">
            <div className="rw_propertyDetails_info">
              <p className="rw_propertyDetails_infoPrice bold text" data-property-min-price={ propertyObject.propertyStartingPriceString } data-id="propertyDetailsInfoPrice">{ propertyObject.propertyStartingPriceString }</p>
              <p className="text" data-id="propertyDetailsInfoAddress">{ propertyObject.propertyAddress }
                <span data-c="btnLinkTo" data-label="Explore the map" data-target=".exploreSection" data-type="flat"></span>
              </p>
              <p className="text" data-id="propertyDetailsOfficeHours">Office Hours:
              { propertyObject.propertyOfficeHours && propertyObject.propertyOfficeHours.Friday.endTime }</p>
            </div>
            <div className="rw_propertyDetails_contactData">
              {propertyObject.propertyPhone && <span className="phoneBtn" data-c="labelPhone" data-phone={ propertyObject.propertyPhone }></span>}
              <div className="links_section">
                <span data-c="btnContactUs" data-label="contact us"></span>
                <span data-c="btnShareURL" data-label="Share"></span>
              </div>
              <span data-c="socialMediaIcons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyInfo;