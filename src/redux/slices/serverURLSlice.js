import { createSlice } from '@reduxjs/toolkit'

const serverURLSlice = createSlice({
    name: 'serverURL',
    initialState: {
        serverURL: 'http://localhost:3001'
    }
})

export default serverURLSlice.reducer