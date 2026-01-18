import styles from './styles.module.css';
import minusIcon from './../../../public/assets/images/icon-decrement-quantity.svg';
import plusIcon from './../../../public/assets/images/icon-increment-quantity.svg';
import { useCartContext } from '../../Context/useCartContext';

function QuantityBtn({ quantity, productName }) {
  const { incrementQty, decrementQty, removeItemFromCart } = useCartContext();
  return (
    <>
      <div className={styles.quantityBtn}>
        <button
          className={styles.minusIconBtn}
          onClick={() => {
            quantity === 1
              ? removeItemFromCart(productName)
              : decrementQty(productName);
          }}
        >
          <img src={minusIcon} alt="minus-icon" />
        </button>
        <p className={styles.quantity}>{quantity}</p>
        <button
          className={styles.plusIconBtn}
          onClick={() => incrementQty(productName)}
        >
          <img src={plusIcon} alt="plus-icon" />
        </button>
      </div>
    </>
  );
}

export default QuantityBtn;
