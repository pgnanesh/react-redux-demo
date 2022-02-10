import { connect } from "react-redux"
import { buyIceCream } from "../redux"

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of icecreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy icecream</button>
        </div>
    )
}

const mapPropsToState = reduxState => {
    return {
        numOfIceCreams: reduxState.numOfIceCreams
    }
}

const mapDispatchToProps = reduxDispatch => {
    return {
        buyIceCream: () => reduxDispatch(buyIceCream())
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(IceCreamContainer);