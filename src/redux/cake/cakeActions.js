import { BUY_CAKE } from "./cakeTypes"


export const buyCake = (numOfCakesToBuy = 1) => {
    return {
        type: BUY_CAKE,
        payload: numOfCakesToBuy
    }
}