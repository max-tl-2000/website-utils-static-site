/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
// Property carousel component

import React, { useEffect, createRef } from 'react'

const PropertyCarousel = (props) => {

  const { carouselData } = props
  const carousel = createRef()
  
  useEffect(() => {
    carouselData && carousel.current && window.Reva.ui.createCarouselWidget(carousel.current, carouselData)
  }, [carousel, carouselData])

  return (
    <div className="carousel-section">
      <div id="carousel" ref={carousel}></div>
    </div>
  )
}

export default PropertyCarousel
