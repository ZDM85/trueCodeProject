import { createSlice } from "@reduxjs/toolkit";




const appReducer = createSlice({
    name: "app",
    initialState: {
        popupDisplay: "none"
    },
    reducers: {
        setPopupDisplay(state, action) {
            state.popupDisplay = action.payload
        }
    }
});

export default appReducer.reducer;

export const {setPopupDisplay} = appReducer.actions;
