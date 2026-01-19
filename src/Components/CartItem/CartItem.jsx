import { useCartContext } from '../../Context/useCartContext';
import styles from './styles.module.css';
import crossIcon from './../../../public/assets/images/icon-remove-item.svg';

function CartItem({ cartItem }) {
  const { removeItemFromCart } = useCartContext();
  return (
    <>
      <div className={styles.cartItemContainer}>
        <div className={styles.itemData}>
          <p className={styles.itemName}>{cartItem.name}</p>
          <div className={styles.qtyPrice}>
            <p className={styles.itemQty}>{cartItem.quantity}x</p>
            <p className={styles.itemPrice}>
              @ &#36;{cartItem.price}
              <span>&#36;{cartItem.price * cartItem.quantity}</span>
            </p>
          </div>
        </div>
        <button
          className={styles.removeBtn}
          onClick={() => removeItemFromCart(cartItem.name)}
        >
          <img
            src={crossIcon}
            alt="remove-icon"
            className={styles.removeIcon}
          />
        </button>
      </div>
      <hr className={styles.divider} />
    </>
  );
}

export default CartItem;
