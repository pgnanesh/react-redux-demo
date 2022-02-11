import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/IceCreamReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    numOfCakes: cakeReducer,
    numOfIceCreams: iceCreamReducer,
    user: userReducer
})

export default rootReducer;