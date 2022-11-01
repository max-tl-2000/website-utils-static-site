/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
// Example of using the sample reducer (counter)

const sample = (state = 1, action) => {
	switch(action.type){
		case "increment":
			return state + 1
		case "decrement":
			if(state <= 0) return 0;
			return state - 1
		default: 
			return state
	}
}

export default sample
