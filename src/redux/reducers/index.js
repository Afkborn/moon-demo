import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    // Add your reducers here
    categoryReducer,
    changeCategoryReducer,
    productReducer,
    cartReducer,
})

export default rootReducer;