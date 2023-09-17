import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {showCart: false};

const uiActionSlice = createSlice({
    name : 'uiActions',
    initialState : INITIAL_STATE,
    reducers : {
        toggleCart(state) {
            state.showCart = !state.showCart; 
        }
    }
}); 

export const uiActions = uiActionSlice.actions;
export default uiActionSlice;