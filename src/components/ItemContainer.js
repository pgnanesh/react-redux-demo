import { connect } from "react-redux";

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
        </div>
    )
}

const mapStateToProps = (reduxState, ownProps) => {

    const item = ownProps.cake ? reduxState.numOfCakes : reduxState.numOfIceCreams;

    return {
        item
    }
}

export default connect(mapStateToProps)(ItemContainer);