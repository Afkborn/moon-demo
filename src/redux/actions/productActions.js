import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}


export function getProducts(categoryId) {
    return function (dispatch) {
      let endpoint = "https://moon-backend.afkborn.keenetic.pro/products?categoryId=" + categoryId;
      return fetch(endpoint)
        .then((response) => response.json())
        .then((result) => dispatch(getProductsSuccess(result)));
    };
  }
  