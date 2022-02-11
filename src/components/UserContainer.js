import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../redux'

function UserContainer(props) {

    let { fetchUsers, reduxState } = props;

    useEffect(() => {
        fetchUsers();
    }, [])

    const getUi = () => {

        if (reduxState.user.isLoading) {
            return (
                <div>
                    Loading......
                </div>
            )
        }

        if (!reduxState.user.isLoading && reduxState.user.error) {
            return (
                <div>
                    <h1>Error</h1>
                    <p>{reduxState.user.error}</p>
                </div>
            )
        }


        if (!reduxState.user.isLoading && reduxState.user?.users && reduxState.user?.users?.length) {
            return (
                <div>
                    <h1>Error</h1>
                    {reduxState.user.users.map((user) => <p>{user.name}</p>)}
                </div>
            )
        }
    }

    return (
        <div>
            {
                getUi()
            }
        </div>
    )
}


const mapStateToProps = reduxState => {
    return {
        reduxState
    }
}

const mapDispatchToProps = reduxDispatch => {
    return {
        fetchUsers: () => reduxDispatch(userActions.fetchUsersAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);