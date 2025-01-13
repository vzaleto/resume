import {createSlice} from "@reduxjs/toolkit";

interface ThemeSlice {
    darkMode: boolean
}

const initialState: ThemeSlice = {
    darkMode: false
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode
        }
    }
})

export const {toggleDarkMode} = themeSlice.actions

export default themeSlice.reducer