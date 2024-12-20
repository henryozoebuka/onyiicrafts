import React, { useEffect, useState } from 'react'
import './StaffLogin.css'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setLoggedIn } from '../../redux/slices/loggedInSlice.js'
import { setUser } from '../../redux/slices/userSlice.js'
import { Link, useNavigate } from 'react-router-dom'

const StaffArea = () => {
    const {serverURL} = useSelector(state => state.serverURL)
    const {loggedIn} = useSelector(state => state.loggedIn)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({})
    const [staff, setStaff] = useState(false)

    //handle change
    const handleChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    //handle submit
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(`${serverURL}/userLogin`, loginData)
            if (response.status === 200) {
                dispatch(setLoggedIn())
                dispatch(setUser(response.data))
                navigate('/contact')
                console.log(loggedIn)
                console.log(response.data)
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    alert(error.response.data.message)
                }
                if (error.response.status === 404) {
                    alert(error.response.data.message)
                }
            }

            console.error('Error occurred while logging in: ', error)
        }
    }

    //toggle between customer and staff
    const toggleToStaff = () => {
        setStaff(true)
    }

    const toggleToCustomer = () => {
        setStaff(false)
    }

    useEffect(()=>{}, [staff])

  return (
    <div className='staff-area'>
        <div className='staff-area-wrapper'>
            <p className='staff-area-title'>staff login</p>
            <form onSubmit={handleSubmit} className='staff-area-form'>
                    <input type='text' onChange={handleChange} name='username' value={loginData.username} placeholder='Username or email' className='staff-area-username-input'/>
                    <input type='password' onChange={handleChange} name='password' value={loginData.password} placeholder='Password' className='staff-area-password-input'/>
                    <input type='submit' className='staff-area-submit-input'/>
            </form>
            <div className='staff-or-customer' style={{}}>
                <div className='customer' onClick={()=>{toggleToCustomer()}} style={!staff ? {backgroundColor: "#cb9565"} : {}} ><p>Customer</p></div>
                <div className='staff' onClick={()=>{toggleToStaff()}} style={staff ? {backgroundColor: "#cb9565"} : {}}><p>Staff</p></div>
            </div>
            <p className='staff-area-new-staff'>A new user? <Link to={'/SignUp'}>Click here</Link> to sign up</p>
        </div>
    </div>
  )
}

export default StaffArea