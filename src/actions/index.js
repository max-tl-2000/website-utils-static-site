/*
 * Copyright (c) 2022 Reva Technology Inc., all rights reserved.
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Licensed under the Elastic License 2.0; you may not use this file except
 * in compliance with the Elastic License 2.0.
 */
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = '{your-contentful-space-id}';
// const API_TOKEN = '{{your-contentful-api-token}}';

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries`)
  console.log(request)
  console.log('hello guy')
  // const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
