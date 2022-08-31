import * as actionTypes from "./actionTypes";


export function getCategoriesSuccess(categories){
    return {
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export function getCategories() {
  return function (dispatch) {
    let url = actionTypes.API_URL +  "categories";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}
