import { useCartContext } from '../../Context/useCartContext';
import styles from './styles.module.css';
import carbonNeutral from './../../../public/assets/images/icon-carbon-neutral.svg';
import CartItem from '../CartItem/CartItem';

function Cart() {
  const { cart } = useCartContext();
  let sum = (total, value) => total + value;
  let cartQuantity = cart.map((item) => item.quantity);
  let totalQuantity = cartQuantity.reduce(sum, 0);
  let priceItems = cart.map((item) => item.price * item.quantity);
  let totalPrice = priceItems.reduce(sum, 0);

  return (
    <>
      <section className={styles.cartContainer}>
        <h1 className={styles.cartTitle}>Your cart({totalQuantity})</h1>

        {cart.map((item) => (
          <CartItem cartItem={item} />
        ))}

        <div className={styles.totalContainer}>
          <p className={styles.orderTotal}>Order Total</p>
          <p className={styles.totalPrice}>&#36;{totalPrice}</p>
        </div>

        <div className={styles.carbonContainer}>
          <img
            src={carbonNeutral}
            alt="carbon-neutal-icon"
            className={styles.carbonIcon}
          />
          <p className={styles.carbonTxt}>
            This is a <span>carbon-neutral</span> delivery
          </p>
        </div>

        <button className={styles.confirmOrderBtn}>Confirm Order</button>
        
      </section>
    </>
  );
}
export default Cart;
