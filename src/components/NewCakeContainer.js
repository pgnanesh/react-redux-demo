import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {

    const [num, setNum] = useState(1);

    const cakeInputOnChangeHandler = evt => {
        setNum(evt.target.value)
        console.log("cakeInputOnChangeHandler ", num);
    }

    const buyCakeHandler = () => {
        console.log("buyCakeHandler", num);
        props.buyCake(num);
    }

    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type="number" value={num} onChange={cakeInputOnChangeHandler}></input>
            <button onClick={buyCakeHandler}>Buy {num} cake</button>
        </div>
    )
}


// As a best practice selectors are used to return state information from redux
const mapStateToProps = reduxState => {
    return {
        numOfCakes: reduxState.numOfCakes
    }
}

const mapDispatchToProps = reduxDispatch => {
    return {
        buyCake: (num) => reduxDispatch(buyCake(num))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);