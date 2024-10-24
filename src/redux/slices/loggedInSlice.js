import { createSlice } from "@reduxjs/toolkit";

const loggedInSlice = createSlice({
    name: 'loggedIn',

    initialState: {
        loggedIn: false
    },

    reducers: {
        setLoggedIn: (state) => {
            state.loggedIn = true
        },

        setLoggedOut: (state) => {
            state.loggedIn = false
        }
    }
})

export const { setLoggedIn, setLoggedOut } = loggedInSlice.actions
export default loggedInSlice.reducer