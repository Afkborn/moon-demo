import * as actionTypes from "./actionTypes";


export function getCategoriesSuccess(categories){
    return {
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export function getCategories() {
  let endpoint = "/categories/";
  return function (dispatch) {
    return fetch(endpoint)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
