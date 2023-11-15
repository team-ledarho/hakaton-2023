import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    isOpen: false
}

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        onOpen: (state) => {
            state.isOpen = !state.isOpen
        }
    },
    extraReducers: (builder) => { }
})

export default popupSlice.reducer

export const { onOpen } = popupSlice.actions

export const selectorIsOpen = (state) => state.popup.isOpen