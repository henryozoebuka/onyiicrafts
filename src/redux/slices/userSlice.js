import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        }
    }
})

const adminUserSlice = createSlice({
    name: 'admin user',
    initialState: {
        adminUser: {}
    },
    reducers: {
        setAdminUser: (state, action) => {
            state.adminUser = action.payload
        }
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },

    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        }
    }
})

export const { setUser } = userSlice.actions;
export const { setUsers } = usersSlice.actions;
export const {setAdminUser} = adminUserSlice.actions
const combinedReducers = { user: userSlice.reducer, adminUser: adminUserSlice.reducer, users: usersSlice.reducer }

export default combinedReducers
