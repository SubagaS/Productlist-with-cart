import { useCartContext } from '../../Context/useCartContext';
// import styles from './styles.module.css';

function Cart() {
  const { cart } = useCartContext();
  return (
    <>
      <h1>You Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
export default Cart;
