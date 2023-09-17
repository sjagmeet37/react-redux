import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    count : 0,
    items : [] 
};

const cartSlice = createSlice({
    name : 'cart',
    initialState : INITIAL_STATE,
    reducers : {
        addItem(state, action) {
            console.log(action);
            let index = state.items.findIndex(item => item.id === action.payload.id);
            if(index === -1) {
                state.items.push(action.payload);
                state.count++;
            } else {
                state.items[index].quantity++;
            }

        },
        removeItem(state, action) {

        }
    }
}); 

export const cartActions = cartSlice.actions;
export default cartSlice;