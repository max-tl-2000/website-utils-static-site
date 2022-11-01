/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
/* TEMP WILL BE BROKEN UP INTO COMPONENT */
import React, { useEffect, createRef } from 'react'
import { Query } from 'react-contentful'
import './About.css'
// import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import LandingContentBlock from '../components/LandingContentBlock'


const About = props => {

  const revaPropertyTabs = createRef()

  const options = {
    renderNode: {
      
    }
  }

  useEffect(() => {
    document.title = "Demo CMS | About";
    revaPropertyTabs.current && window.Reva.ui.createPropertyTabs(revaPropertyTabs.current)
  }, [revaPropertyTabs])

  return (
    <Query contentType="aboutPage" key={1}>
      {({data, error, fetched, loading}) => {
        console.log('loading')
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
          aboutBanner,
          aboutHeader,
          aboutMainContent,
          whyBannerImage,
          whyBannerText,
          whyBannerCta,
          whyHeaderContentRich,
          whyBlockAHeader, whyBlockAContent, whyBlockACta, whyBlockAImage,
          whyBlockBHeader, whyBlockBContent, whyBlockBCta, whyBlockBImage,
          whyBlockCHeader, whyBlockCContent, whyBlockCCta, whyBlockCImage,
          corporateSponsorshipTitle,
          corporateSponsorshipHeaderContentRich,
          investorHeaderBackgroundImage,
          investorHeader,
          investorHeaderContent,
          contactHeader,
          contactCorporateOffices, contactCustomerConcerns, contactGeneral, contactInvestorRelations, contactShareholders, contactTransferAgents,
        } = data.items[0].fields
        
        const blocksArray = [
          { id: 1, url: whyBlockAImage.fields.file.url, header: whyBlockAHeader, content: whyBlockAContent, cta: whyBlockACta },
          { id: 2, url: whyBlockBImage.fields.file.url, header: whyBlockBHeader, content: whyBlockBContent, cta: whyBlockBCta },
          { id: 3, url: whyBlockCImage.fields.file.url, header: whyBlockCHeader, content: whyBlockCContent, cta: whyBlockCCta },
        ]

        const landingBlocks = blocksArray.map( item => <LandingContentBlock key={item.id} {...item} />);

        // Process and pass in the loaded `data` necessary for your page or child components.
        return (

          <div style={{ marginTop: 102 }}>

            <div 
                className="image--header"
                style={{ background: `url(${aboutBanner.fields.file.url})`}}>
            </div>

            <div className="reva_page_sections" ref={revaPropertyTabs}></div>

            <div className="content-boundary" data-reva-section="About">
              <h2>{ aboutHeader }</h2>
              <div>{ documentToReactComponents(aboutMainContent, options) }</div>
            </div>

            <div className="spacer-92"></div>
            
            <div data-reva-section="Why CUSTOMEROLD?">

              <div>
                <div id="about-why-customerold" className="ui-sub-nav-item ui-index-main-image" style={{backgroundSize: 'cover', backgroundImage: `url(${whyBannerImage.fields.file.url})`}} data-reva-section="Why CUSTOMEROLD?">
                  <div>
                    <div className="row">
                      <div className="col">
                        <div style={{paddingBottom: '9.0625%'}}>&nbsp;</div>
                        <div>
                          <h2>{whyBannerText}</h2>
                        </div>
                        <div>
                          <a className="btn-small" href="/why-customerold-choose-customerold">{whyBannerCta}</a>
                        </div>
                        <div style={{paddingBottom: '4.45312%'}}>&nbsp;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-boundary">
                <div className="content-box">{ documentToReactComponents(whyHeaderContentRich, options) }</div>
              </div>

              <div className="spacer-24"></div>
              <hr className="content-boundary" />
              <div className="spacer-24"></div>

              <div className="content-boundary">
                <div className="tiles cWrapper">
                  {landingBlocks}
                </div>
              </div>

            </div>

            <hr />

            <div data-reva-section="Corporate Sponsorship">
              <h2>{ corporateSponsorshipTitle }</h2>
              <div className="content-boundary"><div className="content-box">{ documentToReactComponents(corporateSponsorshipHeaderContentRich, options) }</div></div>

              <div className="spacer-92"></div>


              <div>
                <div id="about-why-customerold" className="ui-sub-nav-item ui-index-main-image" style={{backgroundSize: 'cover', backgroundImage: `url(${investorHeaderBackgroundImage.fields.file.url})`}} data-reva-section="Why CUSTOMEROLD?">
                  <div>
                    <div className="row">
                      <div>
                        <div style={{paddingBottom: '12px'}}>&nbsp;</div>
                        <div>
                          <h2>{investorHeader}</h2>
                          <div className="content-box-inner">{ investorHeaderContent }</div>
                        </div>
                        <div style={{paddingBottom: '4.45312%'}}>&nbsp;</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="spacer-92"></div>

            <div data-reva-section="Contact">
              <h2>{ contactHeader }</h2>

              <div className="content-boundary" style={{ display: 'flex', justifyContent: 'space-between', width: 920 }}>
                <div style={{ marginRight: 92 }}>
                  <div>{ documentToReactComponents(contactCorporateOffices, options) }</div>
                  <div>{ documentToReactComponents(contactInvestorRelations, options) }</div>
                  <div>{ documentToReactComponents(contactShareholders, options) }</div>
                </div>
                <div>
                  <div>{ documentToReactComponents(contactTransferAgents, options) }</div>
                  <div>{ documentToReactComponents(contactGeneral, options) }</div>  
                </div>
              </div>


              <div className="content-boundary" style={{  width: 920 }}>{ documentToReactComponents(contactCustomerConcerns, options) }</div>

              <div className="spacer-92"></div>

            </div>

          </div>
        );
      }}
    </Query>

  )

}


  // });

export default About
