import { useContext } from 'react';
import { CartContext } from './createCartContext';

export function useCartContext() {
  const { cart, addItemToCart, incrementQty, decrementQty,removeItemFromCart } =
    useContext(CartContext);
  return { cart, addItemToCart, incrementQty, decrementQty,removeItemFromCart };
}
