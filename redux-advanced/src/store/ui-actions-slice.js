import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {showCart: true};

const uiActionSlice = createSlice({
    name : 'uiActions',
    initialState : INITIAL_STATE,
    reducers : {
        showCart(state, action) {

        },
        hideCart(state, action) {

        }
    }
}); 

export const uiActions = uiActionSlice.actions;
export default uiActionSlice;