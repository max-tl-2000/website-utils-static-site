/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import { combineReducers } from 'redux'
import sample from './sampleReducer'
import PostsReducer from './posts_reducer';

export default combineReducers({
	sample,
	posts: PostsReducer
});