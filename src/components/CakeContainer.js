import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
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
        buyCake: () => reduxDispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);