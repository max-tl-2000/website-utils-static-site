/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { Query } from 'react-contentful';
import LandingContentBlock from '../components/LandingContentBlock';

const Landing = props => {

  useEffect(() => {
    document.title = "Demo CMS";
  }, [])

  return <Query contentType="landing">
    {({data, error, fetched, loading}) => {
      if (loading || !fetched) {
        return null;
      }
  
      if (error) {
        console.error(error);
        return null;
      }
  
      if (!data) {
        return <p>Page does not exist.</p>;
      }
  
      const { 
        heroHeader, heroSubHeader, heroMediaUrl, 
        blockAMedia, blockAHeader, blockAContent, 
        // blockAButtonAText, blockAButtonBText,
        blockBMedia, blockBHeader, blockBContent, 
        // blockBButtonAText, blockBButtonBText,
        blockCMedia, blockCHeader, blockCContent, 
        // blockCButtonAText, blockCButtonBText,
        bottomHeader, bottomText, bottomButtonText
      } = data.items[0].fields;

      const blocksArray = [
        { id: 1, url: blockAMedia.fields.file.url, header: blockAHeader, content: blockAContent },
        { id: 2, url: blockBMedia.fields.file.url, header: blockBHeader, content: blockBContent },
        { id: 3, url: blockCMedia.fields.file.url, header: blockCHeader, content: blockCContent },
      ]

      const landingBlocks = blocksArray.map( item => <LandingContentBlock key={item.id} {...item} />);
      
      // Process and pass in the loaded `data` necessary for your page or child components.
      return (

        <div>

          <Hero heroHeader={heroHeader} heroSubHeader={heroSubHeader} heroMediaUrl={heroMediaUrl} />

          <div className="tiles cWrapper">
            {landingBlocks}
          </div>

          <div className="block-investors cWrapper">
            <div className="investorsWrapper"></div>
            <div className="textWrapper">
              <h2 className="serifFont">{ bottomHeader }</h2>
              <p>{ bottomText }</p>
              <a href="/investors">→&nbsp;&nbsp;{ bottomButtonText }</a>
            </div>
          </div>
        </div>
      );
    }}
  </Query>
};

export default Landing
