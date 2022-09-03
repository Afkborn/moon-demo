import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import spinnerReducer from "./spinnerReducer";

const rootReducer = combineReducers({
    // Add your reducers here
    categoryReducer,
    changeCategoryReducer,
    productReducer,
    cartReducer,
    spinnerReducer,
})

export default rootReducer;