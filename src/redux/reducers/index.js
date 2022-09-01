import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import changeCategoryReducer from "./changeCategoryReducer";
const rootReducer = combineReducers({
    // Add your reducers here
    categoryReducer,
    changeCategoryReducer,
})

export default rootReducer;