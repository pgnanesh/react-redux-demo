import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.dispatchFunction}>Buy item</button>
        </div>
    )
}

const mapStateToProps = (reduxState, ownProps) => {

    const item = ownProps.cake ? reduxState.numOfCakes : reduxState.numOfIceCreams;

    return {
        item
    }
}

const mapDispatchToProps = (reduxDispatch, ownProps) => {

    const dispatchFunction = ownProps.cake ?
        () => reduxDispatch(buyCake()) :
        () => reduxDispatch(buyIceCream());

    return {
        dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);