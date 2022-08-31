import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
const rootReducer = combineReducers({
    // Add your reducers here
    categoryReducer,
})

export default rootReducer;