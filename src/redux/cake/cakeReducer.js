import { BUY_CAKE } from "./cakeTypes";

const numOfCakes = 10;

const cakeReducer = (state = numOfCakes, action) => {
    switch (action.type) {
        case BUY_CAKE: {
            return state - action.payload;
        }

        default:
            return state;
    }
}

export default cakeReducer;