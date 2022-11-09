import axios from 'axios';
import {
  GET_POST_SUCCESS,
  GET_IMAGE_SUCESS
} from "./actionTypes";

export function fetchPosts() {
  return dispatch => {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.data)
      .then(posts => {
        dispatch({
          type: GET_POST_SUCCESS,
          posts
        });
      })
  };
}
export function fetchImages() {
  return dispatch => {
    return axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.data)
      .then(images => {
        dispatch({
          type: GET_IMAGE_SUCESS,
          images
        });
      })
  };
}

