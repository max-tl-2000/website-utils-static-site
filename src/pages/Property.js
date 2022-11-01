/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import React, { useEffect, createRef, useState } from 'react'
import { useContentful } from 'react-contentful'
import { useParams } from "react-router-dom";
import PropertyInfo from '../components/PropertyInfo/PropertyInfo'
import PropertyCommunity from '../components/PropertyCommunity/PropertyCommunity'
import PropertyIndDescription from '../components/PropertyIndDescription/PropertyIndDescription'
import PropertyCarousel from '../components/PropertyCarousel/PropertyCarousel'

const Property = (props) => {

  const [hasPropertyInfo, updatePropertyInfo] = useState(false)

  const params = useParams()
  const propertySpecials = createRef()
  const revaPropertyMap = createRef()
  const relatedProperties = createRef()
  const contactUsForm = createRef()
  const propertyDetails = createRef()
  const revaPropertyTabs = createRef()

  const store = window.Reva.stores.getWebSiteStore();
  const propertyName = `${params.state}/${params.city}/${params.property}`
  store.setPropertyFromSlug(propertyName)

  let { currentPropertyStore: propertyStore = {} } = store;

  let setTimer;
  function recheckPropertyInfo() {
    clearTimeout(setTimer)
    let { currentPropertyStore: propertyStore = {} } = store;
    setTimer = setTimeout( () => {
      if(!propertyStore.propertyId) return recheckPropertyInfo()
      updatePropertyInfo(true)
    }, 1000 )
  }

  if(Object.keys(propertyStore).length === 0 && propertyStore.constructor === Object) {
    recheckPropertyInfo()
  }

  useEffect(() => {

    // Set header name
    document.title = `Demo CMS | Property | ${params.property}`;

    // propertyDetails.current && window.Reva.ui.createPropertyInfoWidget(propertyDetails.current)
    revaPropertyTabs.current && window.Reva.ui.createPropertyTabs(revaPropertyTabs.current)
    store.propertyTabsStore.loadFromDOM('[data-reva-section]')
    propertySpecials.current && window.Reva.ui.createPropertySpecialsWidget(propertySpecials.current)
    revaPropertyMap.current && window.Reva.ui.createPropertyMapWidget(revaPropertyMap.current, {
      onPropertyClick: function onPropertyClick(args) {
        let url = args.url;
        if (url.match(/^\/property/)) {
          url = `/property.html?slug=${url.replace(/^\/property/, '')}`
          window.Reva.navigator.navigateTo(url);
          return;
        }
      }
    })
    relatedProperties.current && window.Reva.ui.createRelatedPropertiesWidget(relatedProperties.current, {})
  }, [params, store, revaPropertyTabs, propertyDetails, propertySpecials, revaPropertyMap, relatedProperties])

  const { data, error, fetched, loading } = useContentful({
    contentType: 'property',
    query: {
      'fields.slug[in]': propertyName,
    }
  });
  
  if (loading || !fetched) {
    return null;
  }
 
  if (error) {
    console.error(error);
    return null;
  }
 
  if (!data || data.items.length <= 0) {
    return <p>Page does not exist.</p>;
  }
 
  // See the Contentful query response
  const { 
    propertyDescriptionLeft, 
    propertyDescriptionRight,
    carousel,
    propertyPictures 
  } = data.items[0].fields

  const propertyPictureObject = propertyPictures ? propertyPictures.map( (pic, index) => 
    <div key={index} className={`rw_image_0${index + 1}`} style={{ backgroundImage: `url(${pic.fields.file.url})`  }}></div> 
  ) : null

  return (
    <section>
    
    <PropertyCarousel carouselData={carousel} />

    <div id="propertySpecials" ref={propertySpecials}></div>

    <div className="cWrapper mainContent">

      {hasPropertyInfo && <PropertyInfo store={store} /> }

      <div className="reva_page_sections" ref={revaPropertyTabs}></div>

      <PropertyIndDescription propertyPictureObject={propertyPictureObject} propertyDescriptionLeft={propertyDescriptionLeft} propertyDescriptionRight={propertyDescriptionRight} />

    </div>

    <PropertyCommunity />

    <div className="findYourApartment">
      <h2 className="blockTitle serifFont" data-reva-section="Floor plans" id="sectionFloorplans">Find Your New Home</h2>
      <div id="inventorySelector"></div>
    </div>

    <div className="exploreSection">
      <h2 className="blockTitle serifFont" data-reva-section-short="Map" data-reva-section="Explore The Area" id="sectionExploreMap">Explore the Neighborhood</h2>
      <div id="revaPropertyMap" ref={revaPropertyMap}></div>
    </div>

    <div className="otherCommunities">
      <div className="oc_smallLayout">
        <h2 className="blockTitle serifFont">Other communities</h2>
      </div>
      <div className="oc_mediumLayout">
        <h2 className="title serifFont">Similar Communities Recommended For You</h2>
      </div>
      <div id="relatedProperties" ref={relatedProperties}></div>
      <div id="contactUsForm" ref={contactUsForm}></div>
    </div>
    <div className="inline-form"></div>

    <div id="webchat"></div>

  </section>
  );
}

export default Property
