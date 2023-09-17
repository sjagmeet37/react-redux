import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = [];

const cartSlice = createSlice({
    name : 'cart',
    initialState : INITIAL_STATE,
    reducers : {
        addItem(state, action) {

        },
        removeItem(state, action) {

        },
        getItems(state) {

        },
        getCount() {

        }
    }
}); 

export const cartActions = cartSlice.actions;
export default cartSlice;