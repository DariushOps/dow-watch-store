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
          image: newItem.image,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (!existingItem) return;

      state.totalQuantities--;
      state.changed = true;

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
  },
});

export const cartActions = cart.actions;
export default cart.reducer;
