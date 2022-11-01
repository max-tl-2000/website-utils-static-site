/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import React, { 
	useEffect, 
	createRef, 
	useState
	// useRef 
} from 'react'
// import { useContentful, Query } from 'react-contentful';
import {
  useLocation,
	useParams,
	Redirect
} from "react-router-dom"
import queryString from 'query-string'
// import { create } from 'domain';


const Community = (props) => {
	const [hasPropertySelected, setPropertySelectedState] = useState(null);
	const params = useParams()
	const locations = useLocation();
	const communitySearch = locations.search ? queryString.parse(locations.search) : null;
	const Reva = window.Reva
	
	if(params.city) {
		console.log(`I am a city and that city is, ${params.city}`)
	}

	if(communitySearch) {
		console.log(`I am a region and that region is, ${communitySearch.state}`)
	}
	
	Reva.stores.getWebSiteStore().searchStore.parseQueryFromUrl()

	const pageError = createRef()
	const searchBoxFilter = createRef()
	const searchFiltersBody = createRef()
	const searchResultList = createRef()
	const revaMap = createRef()

  useEffect(() => {


    // Set header name
    document.title = `Demo CMS | Community | ${ (params.city && params.city) || (communitySearch && communitySearch.state) || 'unknown'}`;

		pageError.current && Reva.ui.createPageErrorWidget(pageError.current)
		searchBoxFilter.current && Reva.ui.createSearchBoxFilterWidget(searchBoxFilter.current)
		searchFiltersBody.current && Reva.ui.createSearchFiltersWidget(searchFiltersBody.current, {
			verticalMenu: !!"",
		})
		searchResultList.current && Reva.ui.createSearchResultListWidget(searchResultList.current, {
			onPropertyClick: function onPropertyClick(args) {
				let url = args.url;
				if (url.match(/^\/property/)) {
					url = `/property${url.replace(/^\/property/, '')}`
					setPropertySelectedState(url)
				}
			},
		})
		// revaMap.current && Reva.ui.createSearchMapWidget(revaMap.current, {
		// 	onPropertyClick: function onPropertyClick(args) {
		// 		let url = args.url;
		// 		if (url.match(/^\/property/)) {
		// 			url = `/property.html?slug=${url.replace(/^\/property/, '')}`
		// 			Reva.navigator.navigateTo(url);
		// 			return;
		// 		}
		// 	},
		// })
  }, [Reva, pageError, searchBoxFilter, searchFiltersBody, searchResultList, revaMap, communitySearch, params])

//   const { data, error, fetched, loading } = useContentful({
//     contentType: 'property',
//     query: {
//       'fields.slug[in]': propertyName,
//     }
//   });
  
//   if (loading || !fetched) {
//     return null;
//   }
 
//   if (error) {
//     console.error(error);
//     return null;
//   }
 
//   if (!data || data.items.length <= 0) {
//     return <p>Page does not exist.</p>;
//   }
 
  // See the Contentful query response
//   const {  } = data.items[0].fields

	if(hasPropertySelected) {
		return <Redirect push to={hasPropertySelected} />
	}

  return (
    <section>
			<div className="contentWrapper">
				<div className="searchBlock">
					<div className="bigBlock cWrapper">
						<div className="searchInterface">
							<div ref={pageError}></div>
							<div className="searchFiltersSection">
								<div ref={searchBoxFilter}></div>
								<div ref={searchFiltersBody}></div>
								<div ref={searchResultList}></div>
							</div>
						</div>
						<div ref={revaMap}></div>
					</div>
				</div>
			</div>
    </section>
  );
}

export default Community
