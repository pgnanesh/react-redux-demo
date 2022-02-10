import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/IceCreamReducer";

const rootReducer = combineReducers({
    numOfCakes: cakeReducer,
    numOfIceCreams: iceCreamReducer
})

export default rootReducer;