import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    showCounter: true,
  };
  
  const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
      increment(state) {
        state.counter++;
      },
      decrement(state) {
        state.counter--;
      },
      incrementFlex(state, action) {
          console.log(action)
          state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
      console.log(state.showCounter)
          state.showCounter = !state.showCounter;
      },
    },
  });

export const counterActions = counterSlice.actions;
export default counterSlice;  