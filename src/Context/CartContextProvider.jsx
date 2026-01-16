import { useState } from 'react';
import { CartContext } from './createCartContext';

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  
  function addItemToCart({item}) {
    console.log(item);
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    console.log(cart);
  }

  return (
    <>
      <CartContext.Provider value={{ cart, addItemToCart }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartContextProvider;
