import styles from './styles.module.css';
import FoodCard from '../FoodCard/FoodCard';

function Menu({ allData }) {
  return (
    <>
      <section className={styles.menuContainer}>
        <h1 className={styles.title}>Desserts</h1>
        <div className={styles.dessertCardsContainer}>
          {allData.map((item) => (
            <FoodCard dessertItem={item} key={item.name} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Menu;
