import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {

    // useSelector hook receives redux state as the argument
    const noOfCakes = useSelector(reduxDtate => reduxDtate.numOfCakes)
    const reduxDispatch = useDispatch()

    return (
        <div>
            <h2>Num of cakes - {noOfCakes}</h2>
            <button onClick={() => reduxDispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer;