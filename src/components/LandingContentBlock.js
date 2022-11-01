/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import React from 'react'
import './LandingContentBlock.css'

const LandingContentBlock = props => {
  const { url, header, content, id, cta } = props;

  const imageBlock = <div className="box" style={{backgroundImage: `url(${url})`}}></div>
  const contentBlock = <div className="box">
    <h3 className="homeTitle sectionTitle serifFont">{ header }</h3>
    <p style={{marginBottom:50}}>{ content }</p>
    <div style={{marginBottom:20}}  data-w="button" data-big="true" data-label="Resident Login" data-link-to="/login"></div>
    <div data-w="button" data-link-to="/residents" data-big="true" data-label="More info" data-type="flat" ></div>
    { cta && <button>{cta}</button> }
  </div>

  if (id % 2) {
    return [
      imageBlock,
      contentBlock,
    ]
  } else {
    return [
      contentBlock,
      imageBlock,
    ]
  }
};

export default LandingContentBlock
