import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  products: [
    { id : 1, name: "Product 1", description: "Nice Product 1", unitPrice: 10 },
    { id : 2, name: "Product 2", description: "Nice Product 2", unitPrice: 20 },
    { id : 3, name: "Product 3", description: "Nice Product 3", unitPrice: 30 },
    { id : 4, name: "Product 4", description: "Nice Product 4", unitPrice: 40 },
  ],
  count : 4
};

const productSlice = createSlice({
  name: "product",
  initialState: INITIAL_STATE,
  reducers: {
    addItem(state, action) {},
    removeItem(state, action) {},
  },
});

export const productActions = productSlice.actions;
export default productSlice;
