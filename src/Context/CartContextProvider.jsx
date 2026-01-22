import { useState } from 'react';
import { CartContext } from './createCartContext';

function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [confirmOrder, setConfirmOrder] = useState(false);

  function handleOnConfirmClick() {
    setConfirmOrder(true);
  }

  function addItemToCart({ item }) {
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
  }

  function incrementQty(dessertName) {
    setCart(
      cart.map((item) =>
        item.name === dessertName
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }
  function decrementQty(dessertName) {
    setCart(
      cart.map((item) =>
        item.name === dessertName
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  }

  function removeItemFromCart(dessertName) {
    setCart(cart.filter((item) => item.name !== dessertName));
  }

  function newOrderReset() {
    setCart([]);
    setConfirmOrder(false);
  }

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          addItemToCart,
          incrementQty,
          decrementQty,
          removeItemFromCart,
          newOrderReset,
          confirmOrder,
          handleOnConfirmClick,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartContextProvider;
