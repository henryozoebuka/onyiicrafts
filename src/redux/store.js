import { configureStore } from "@reduxjs/toolkit";
import serverURL from './slices/serverURLSlice.js'
import user from './slices/userSlice.js'
import loggedIn from './slices/loggedInSlice.js'

export default configureStore({
    reducer: {
        serverURL,
        user,
        loggedIn,
    }
})