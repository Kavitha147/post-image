import axios from "axios";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./action";

export function fetchPost() {
  return dispatch => {
    dispatch(fetchDataRequest());
    axios
      .get(
        "https://jsonplaceholder.typicode.com/posts"
      )
      .then(response => {
        dispatch(fetchDataSuccess(response.data));
      })
  };
}
