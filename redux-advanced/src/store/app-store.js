import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cart-slice";
import productSlice from "./product-slice";
import uiActionSlice from "./ui-actions-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    uiActions: uiActionSlice.reducer,
    products: productSlice.reducer,
  },
});

export default store;