import * as actionTypes from "./actionTypes";
import * as spinnerActions from "./spinnerActions";
export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}


export function getProducts(categoryId) {
    return function (dispatch) {
      let endpoint = "/products?categoryId=" + categoryId;
      return fetch(endpoint)
        .then((response) => response.json())
        .then((result) => dispatch(getProductsSuccess(result)))
        .then(() => dispatch(spinnerActions.hideSpinner()));

    };
  }
  