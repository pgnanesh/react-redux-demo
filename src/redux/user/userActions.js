import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

const fetchUserRequestAction = () => {

    const action = {
        type: FETCH_USERS_REQUEST
    }

    return action;
}


const fetchUserSuccessAction = (users) => {

    const action = {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }

    return action;
}

const fetchUserFailueAction = (errorObj) => {

    const action = {
        type: FETCH_USERS_FAILURE,
        payload: errorObj
    }

    return action;
}

// we can pass a function insted of object when redux-thunk middleware is used to perform async actions
const fetchUsersAction = () => {
    return (reduxDispatchFunc) => {

        reduxDispatchFunc(fetchUserRequestAction());

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(users => {
                console.log("axios users ==============> ", users);
                reduxDispatchFunc(fetchUserSuccessAction(users.data))
            })
            .catch(err => [
                reduxDispatchFunc(fetchUserFailueAction(err.message))
            ])

    }
}

export { fetchUserRequestAction, fetchUserSuccessAction, fetchUserFailueAction, fetchUsersAction };