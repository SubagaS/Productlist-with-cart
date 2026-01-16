import styles from './styles.module.css';
import FoodCard from '../FoodCard/FoodCard';


function Menu({ allData }) {
//   const { cart } = useCartContext();
//   console.log(cart);
  return (
    <>
      <section className={styles.menuContainer}>
        <h1 className={styles.title}>Desserts</h1>
        {allData.map((item) => (
          <FoodCard desserItem={item} key={item.name} />
        ))}
      </section>
    </>
  );
}

export default Menu;
