import styles from './styles.module.css';
import AddCartBtn from '../AddToCartBtn/AddCartBtn';
import { useCartContext } from '../../Context/useCartContext';
import QuantityBtn from '../QuantityBtn/QuantityBtn';

function FoodCard({ dessertItem }) {
  const { cart } = useCartContext();
  const selectItem = cart.find((item) => item.name === dessertItem.name);
  // console.log(selectItem);

  return (
    <>
      <div className={styles.cardContainer}>
        <img src={dessertItem.image} alt="" className={styles.imgFood} />
        {!selectItem ? (
          <AddCartBtn item={dessertItem} />
        ) : (
          <QuantityBtn
            quantity={selectItem.quantity}
            productName={dessertItem.name}
          />
        )}
        <div className={styles.txtContainer}>
          <p className={styles.categoryTxt}>{dessertItem.category}</p>
          <p className={styles.nameTxt}>{dessertItem.name}</p>
          <p className={styles.priceTxt}>&#36;{dessertItem.price}</p>
        </div>
      </div>
    </>
  );
}

export default FoodCard;
