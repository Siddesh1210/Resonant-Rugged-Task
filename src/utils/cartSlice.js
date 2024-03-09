import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      //To calculate TotalPrice
      state.totalPrice += newItem.salePrice;
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.productId === action.payload.productId);
      if (index !== -1) {
      //To calculate TotalPrice and Deduct it
        state.totalPrice -= state.items[index].salePrice; 
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.totalPrice = 0; 
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, clearCart } = cartSlice.actions;
