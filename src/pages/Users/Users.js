import React, { useEffect, useState } from 'react'
import './Users.css'
import axios from 'axios'
import { setUsers } from '../../redux/slices/userSlice.js'
import { useDispatch, useSelector } from 'react-redux'

const Users = () => {
    const { serverURL } = useSelector(state => state.serverURL)
    const { users } = useSelector(state => state.users)
    const dispatch = useDispatch()
    const [deleteUserWarning, setDeleteUserWarning] = useState(false)

    //delete user
    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`${serverURL}/deleteUser/${userId}`)
            if (response.status === 200) {
                alert(response.data.message)
                const updatedUsers = users.filter(users => users._id !== userId)
                dispatch(setUsers(updatedUsers))
                toggleDeleteUser();
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    alert(error.response.data.message) 
                }
            }
            console.error('Error occurred while trying to delete the user: ', error)
        }
    }

    const toggleDeleteUser = () => {
        setDeleteUserWarning(!deleteUserWarning)
    }

    useEffect(() => {
        //fetch users
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${serverURL}/fetchUsers`)
                if (response && response.status === 200) {
                    dispatch(setUsers(response.data))
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 501) {
                        alert(error.response.data.message)
                    }
                }
                console.error('Something went wrong while fetching users: ', error)
            }
        }

        fetchUsers();
    }, [dispatch, serverURL])

    return (
        <div className='users'>
            <div className='users-wrapper'>
                {users && users.length > 0 ?
                    (users.map((user) => (
                        <div className='users-user' key={user._id}>
                            {deleteUserWarning &&
                                <div className='users-user-delete-warning'>
                                    <div className='users-user-delete-warning_wrapper'>
                                        <p>Are you sure you want to delete {user.firstname}'s account?</p>
                                        <div className='users-user-delete-warning-buttons'>
                                            <button className='user-delete-warning-button' onClick={() => { deleteUser(user._id) }}>Yes</button>
                                            <button className='user-delete-warning-button' onClick={() => { toggleDeleteUser()}}>Cancel</button>
                                        </div>
                                    </div>
                                </div>}
                            <div className='users-user-info'>
                                <p>{user.firstname}</p>
                                <div className='users-user-info-divider'></div>
                                <p>{user.lastname}</p>
                            </div>
                            <div className='users-delete-button-div'>
                                <button onClick={() => { toggleDeleteUser(); }}>Delete</button>
                            </div>
                        </div>
                    )))
                    :
                    (<p>There are no users to display.</p>)}
            </div>
        </div>
    )
}

export default Users