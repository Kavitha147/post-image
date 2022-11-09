import {
  GET_POST_SUCCESS,
  GET_IMAGE_SUCESS
} from "../Action/actionTypes";

const initialState = {
  postData: [],
  imageData: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POST_SUCCESS:
      return {
        ...state,
        postData: action.posts
      };
    case GET_IMAGE_SUCESS:
      return {
        ...state,
        imageData: action.images
      };
    default:
      return state;
  }
}
