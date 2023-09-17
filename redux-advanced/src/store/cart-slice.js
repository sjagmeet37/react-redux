import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  count: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addItem(state, action) {
      let index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.items.push(action.payload);
        state.count++;
      } else {
        state.items[index].quantity++;
      }
    },
    removeItem(state, action) {
      let index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log(state.items.slice(0, index));

      if (state.items[index].quantity === 1) {
        state.items.splice(index, 1);
        state.count--;
      } else {
        state.items[index].quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
