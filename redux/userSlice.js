import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        product: [],
        carts: [],
        user: [],
        login: []
    },
    reducers: {
        getproduct: (state, action) => {
            state.product = [...action.payload]
        },
        getcarts: (state, action) => {
            state.carts = action.payload
        },
        getuser: (state, action) => {
            state.user = [...action.payload]
        },
        getLoginUser: (state, action) => {
            state.login = [...action.payload]
        }
    },
})
// console.log(userSlice.actions)

export const { getproduct, getcarts, getuser,getLoginUser } = userSlice.actions