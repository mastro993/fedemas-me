import {UserState} from "./types";
import {createSlice} from "@reduxjs/toolkit";

export const initialState: UserState = {
    isDark: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDark
        },
    }
})

// Actions
export const {toggleTheme} = userSlice.actions

export default userSlice.reducer