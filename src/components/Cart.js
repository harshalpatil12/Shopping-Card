import React, { createContext, useReducer } from 'react'
import './cart.css'

import { products } from './products.js'
import ContextCart from './ContextCart';
import { reducer } from './reducers';

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
}

const Cart = () => {
  // const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });

  }
    const increment = (id) => {
      return dispatch({
        type: "INCREMENT",
        payload: id,
      });
    }

    const decrement = (id) => {
      return dispatch({
        type: "DECREMENT",
        payload: id,
      });
    }


  return (
    <>
    <CartContext.Provider value={{...state, removeItem, increment, decrement }}>
      <ContextCart />
    </CartContext.Provider>
    </>
  )
}

export default Cart