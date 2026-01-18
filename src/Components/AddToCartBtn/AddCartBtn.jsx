import styles from './styles.module.css';
import cartIcon from './../../../public/assets/images/icon-add-to-cart.svg';

import { useCartContext } from '../../Context/useCartContext';

function AddCartBtn({ item }) {
  const { addItemToCart } = useCartContext();

  return (
    <>
      <button
        className={styles.addToCartBtn}
        onClick={() => addItemToCart({ item })}
      >
        <img src={cartIcon} alt="cart-icon" className={styles.cartIcon} />
        <p>Add to cart</p>
      </button>
    </>
  );
}

export default AddCartBtn;
