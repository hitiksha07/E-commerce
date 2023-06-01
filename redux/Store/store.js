import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../userSlice";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer    
    },
});
const makestore = () => store

export const wrapper = createWrapper(makestore) 