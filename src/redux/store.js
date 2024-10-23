import { configureStore } from "@reduxjs/toolkit";
import serverURL from './slices/serverURLSlice.js'

export default configureStore({
    reducer: {
        serverURL
    }
})