import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantities: 0,
    changed: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantities++;
      state.changed = true;

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          id: newItem.id,
          model: newItem.model,
          price: newItem.price,
          quantity: 1,
        });
      }
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;
