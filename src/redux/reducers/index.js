import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";
import spinnerReducer from "./spinnerReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    // Add your reducers here
    categoryReducer,
    changeCategoryReducer,
    productListReducer,
    cartReducer,
    spinnerReducer,
    productReducer,
})

export default rootReducer;