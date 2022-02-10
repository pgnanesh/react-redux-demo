import { BUY_CAKE } from "./cakeTypes"


export const buyCake = (numOfCakesToBuy) => {
    return {
        type: BUY_CAKE,
        payload: numOfCakesToBuy
    }
}