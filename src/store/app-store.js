import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const authInitialState = {
    isAuthenticated : true
}

const authSlice = createSlice({
    name : 'auth',
    initialState : authInitialState,
    reducers : {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth : authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authSliceActions = authSlice.actions;
export default store;
