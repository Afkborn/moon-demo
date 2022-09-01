import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}

export function getCategoriesSuccess(categories){
    return {
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export function getCategories() {
  let endpoint = "https://moon-backend.afkborn.keenetic.pro/categories/";
  return function (dispatch) {
    return fetch(endpoint)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
