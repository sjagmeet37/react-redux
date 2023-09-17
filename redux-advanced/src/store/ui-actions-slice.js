import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {showCart: false, notification: null};

const uiActionSlice = createSlice({
    name : 'uiActions',
    initialState : INITIAL_STATE,
    reducers : {
        toggleCart(state) {
            state.showCart = !state.showCart; 
        },
        setNotification(state, action) {
            state.notification = action.payload;    
        }
    }
}); 

export const uiActions = uiActionSlice.actions;
export default uiActionSlice;