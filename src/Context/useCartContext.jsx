import { useContext } from 'react';
import { CartContext } from './createCartContext';

export function useCartContext() {
  const { cart, addItemToCart } = useContext(CartContext);
  return { cart, addItemToCart };
}
