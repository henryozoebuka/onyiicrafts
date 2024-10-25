import { configureStore } from "@reduxjs/toolkit";
import serverURL from './slices/serverURLSlice.js'
import userReducer from './slices/userSlice.js'
import loggedIn from './slices/loggedInSlice.js'

export default configureStore({
    reducer: {
        serverURL,
        user: userReducer.user,
        adminUser: userReducer.adminUser,
        users: userReducer.users,
        loggedIn,
    }
})