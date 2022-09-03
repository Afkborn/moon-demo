import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  console.log("yükleme bitti")
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}


export function getProducts(categoryId) {
  console.log("yükleme başladı");
    return function (dispatch) {
      let endpoint = "/products?categoryId=" + categoryId;
      return fetch(endpoint)
        .then((response) => response.json())
        .then((result) => dispatch(getProductsSuccess(result)));
    };
  }
  