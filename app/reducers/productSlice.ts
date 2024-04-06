import { createSlice } from '@reduxjs/toolkit';
import getProducts from '../lib/getProducts';
import { Product } from "@Types/typedef";

const initialState = {
    products: []
  };

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    set: (state: any, action: {payload: Array<Product>}) => {
        state.items = [...state.products, ...action.payload]
    },
    setSelected: (state: any, action: {payload: boolean[]}) => {
      state.selected = action.payload;
    }
  },
})

export const { set, setSelected } = productSlice.actions;

export default productSlice.reducer;