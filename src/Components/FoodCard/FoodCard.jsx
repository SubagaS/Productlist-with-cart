import styles from './styles.module.css';

function FoodCard({ desserItem }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <img src={desserItem.image} alt="" />
        <p>{desserItem.category}</p>
        <p>{desserItem.name}</p>
        <p>{desserItem.price}</p>
      </div>
    </>
  );
}

export default FoodCard;
