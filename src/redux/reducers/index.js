import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import productReducer from "./productReducer";
const rootReducer = combineReducers({
    // Add your reducers here
    categoryReducer,
    changeCategoryReducer,
    productReducer
})

export default rootReducer;