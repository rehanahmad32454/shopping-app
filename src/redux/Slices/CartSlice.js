import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem("item")
    ? JSON.parse(localStorage.getItem("item"))
    : [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("item", JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      const findIndex = state.findIndex((item) => item.id == action.payload);
      if (findIndex != -1) {
        state.splice(findIndex, 1);
      }
      localStorage.setItem("item", JSON.stringify(state));
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
