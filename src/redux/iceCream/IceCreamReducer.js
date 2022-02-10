import { BUY_ICECREAM } from "./iceCreamTypes";

const numOfIceCreams = 20;

const iceCreamReducer = (state = numOfIceCreams, action) => {
    switch (action.type) {
        case BUY_ICECREAM: {
            return state - 1;
        }

        default:
            return state;
    }
}

export default iceCreamReducer;