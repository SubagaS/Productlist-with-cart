import styles from './styles.module.css';
import AddCartBtn from '../AddToCartBtn/AddCartBtn';

function FoodCard({ desserItem }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <img src={desserItem.image} alt="" />
        <AddCartBtn item={desserItem}/>
        <p>{desserItem.category}</p>
        <p>{desserItem.name}</p>
        <p>{desserItem.price}</p>
      </div>
    </>
  );
}

export default FoodCard;
