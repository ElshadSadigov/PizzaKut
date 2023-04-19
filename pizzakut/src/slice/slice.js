import { createSlice } from "@reduxjs/toolkit";
import cartData from '../Data/Data'

const initialState = {
    cart : [],
    items: cartData,
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSilce = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if(find >= 0) {
              state.cart[find].quantity += 1;
            }
            else {
              state.cart.push(action.payload)
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },

        increaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            });
        },
          decreaseItemQuantity: (state, action) => {
            state.cart = state.cart.map((item) => {
              if (item.id === action.payload) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            });
          },

          getCartTotal: (state) => {
            let { totalQuantity, totalPrice } = state.cart.reduce(
              (cartTotal, cartItem) => {
                const { price, quantity } = cartItem;
                const itemTotal = price * quantity;
                cartTotal.totalPrice += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
              },
              {
                totalPrice: 0,
                totalQuantity: 0,
              }
            );
            state.totalPrice = totalPrice.toFixed(2);
            state.totalQuantity = totalQuantity;
          },

    }
})

export const { addToCart, removeItem, increaseItemQuantity, decreaseItemQuantity, getCartTotal} = cartSilce.actions;

export default cartSilce.reducer 


