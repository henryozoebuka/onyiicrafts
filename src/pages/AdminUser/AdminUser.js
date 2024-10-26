import React, { useEffect } from 'react'
import './AdminUser.css'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setAdminUser } from '../../redux/slices/userSlice.js'

const AdminUser = () => {
    const { serverURL } = useSelector(state => state.serverURL)
    const { adminUser } = useSelector(state => state.adminUser)
    const dispatch = useDispatch()
    const params = useParams()
    useEffect(() => {
        const fetchUser = async () => {
            const { id } = params;
            try {
                const response = await axios.get(`${serverURL}/fetchUser/${id}`);
                if (response && response.status === 200) {
                    dispatch(setAdminUser(response.data))
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 404) {
                        alert(error.response.data.message)
                    }
                    if (error.response.status === 500) {
                        alert(error.response.data.message)
                    }
                }
                console.error('Error occurred while fetching user: ', error)
            }
        }

        fetchUser();
    }, [serverURL, params, dispatch])

    return (
        <div className='admin-user'>
            <div className='admin-user-wrapper'>
                {adminUser ?
                    (<div className='admin-user-wrapper-contents'>
                        <div className='admin-user-image-div'>
                            <img src={adminUser.photo} alt={adminUser.firstname} />
                        </div>
                        <div className='admin-user-text-div'>
                            <div className='admin-user-text-content'>
                                <p className='admin-user-text-key'>Firstname:</p>
                                <div className='admin-user-text-divider'></div>
                                <p className='admin-user-text-value'>{adminUser.firstname}</p>
                            </div>

                            <div className='admin-user-text-content'>
                                <p className='admin-user-text-key'>Lastname:</p>
                                <div className='admin-user-text-divider'></div>
                                <p className='admin-user-text-value'>{adminUser.lastname}</p>
                            </div>

                            <div className='admin-user-text-content'>
                                <p className='admin-user-text-key'>Role:</p>
                                <div className='admin-user-text-divider'></div>
                                <p className='admin-user-text-value'>{adminUser.role}</p>
                            </div>

                            <div className='admin-user-text-content'>
                                <p className='admin-user-text-key'>Status:</p>
                                <div className='admin-user-text-divider'></div>
                                <p className='admin-user-text-value'>{adminUser.status}</p>
                            </div>
                        </div>
                    </div>) :
                    (null)
                }
            </div>
        </div>
    )
}

export default AdminUser