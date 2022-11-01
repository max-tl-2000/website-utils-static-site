/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
// Property community highlights component

import React from 'react'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const PropertyDescription = (props) => {
  const { propertyPictureObject, propertyDescriptionLeft, propertyDescriptionRight } = props;
  
  const options = {
    renderNode: {
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul>{children}</ul>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li>{children}</li>
      )
    }
  };

  // console.log(documentToReactComponents(propertyDescriptionLeft));

  return (
    <div>
      <div className="propertyDescription">
        <h2 className="serifFont blockTitle" data-reva-section-short="Description" data-reva-section="Property description" id="sectionPropertyDescription">Property Description</h2>
        <div data-id="propertyDescription" className="rw_pd_container">
          <div className="rw_pd_container_block">
          { documentToReactComponents(propertyDescriptionLeft, options) }
          </div>
          <div data-id="descriptionHighlights" className="rw_pd_bullet_block">
            { documentToReactComponents(propertyDescriptionRight, options) }
          </div>
        </div>
      </div>
      <h2 id="contactUsTitle" className="serifFont">Contact us to learn more</h2>
      <div id="contactUsForm1"></div>
      <div className="rw_gallery_block">
        {propertyPictureObject}
      </div>
    </div>
  )
}

export default PropertyDescription
