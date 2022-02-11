import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

const userInitialState = {
    isLoading: false,
    users: [
        {
            id: 1,
            name: "Default person 1"
        },
        {
            id: 2,
            name: "Default person 2",
        },
        {
            id: 2,
            name: "Default person 3",
        }
    ],
    error: ""
}

const userReducer = (state = userInitialState, action) => {

    switch (action.type) {
        case FETCH_USERS_REQUEST: {
            return {
                isLoading: true,
                users: [],
                error: ""
            }
        }

        case FETCH_USERS_SUCCESS: {
            return {
                isLoading: false,
                users: action.payload,
                error: ""
            }
        }

        case FETCH_USERS_FAILURE: {
            return {
                isLoading: false,
                users: [],
                error: action.payload,
            }
        }

        default:
            return state;
    }
}

export default userReducer;