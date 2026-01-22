import { useCartContext } from '../../Context/useCartContext';
import styles from './styles.module.css';
import tickMark from './../../../public/assets/images/icon-order-confirmed.svg';

function ConfirmPopUp() {
  const { cart, newOrderReset } = useCartContext();
  let sum = (item, value) => item + value;
  let priceItem = cart.map((item) => item.price * item.quantity);
  let totalPrice = priceItem.reduce(sum, 0);
  return (
    <>
      <section className={styles.popUpContainer}>
        <div className={styles.popUp}>
          <img src={tickMark} alt="tick-mark" className={styles.tickMark} />
          <h2 className={styles.orderConfirmTxt}>Order Confirmed</h2>
          <p className={styles.enjoyFood}>We hope you enjoy your food</p>
          <div className={styles.itemConfirmContainer}>
            {cart.map((item) => (
              <>
                <div className={styles.itemConfirm}>
                  <div className={styles.imgDataContainer}>
                    <img
                      src={item.image}
                      alt="dessert-img"
                      className={styles.itemImg}
                    />
                    <div className={styles.confirmItemData}>
                      <p className={styles.confirmItemName}>{item.name}</p>
                      <p className={styles.confirmItemQty}>
                        {item.quantity}x <span>&#36;{item.price}</span>
                      </p>
                    </div>
                  </div>

                  <p className={styles.itemConfirmTotalPrice}>
                    &#36;{item.price * item.quantity}
                  </p>
                </div>
                <hr className={styles.divider} />
              </>
            ))}
            <p className={styles.orderTotalPrice}>
              Order Total <span>&#36;{totalPrice}</span>
            </p>
          </div>

          <button className={styles.newOrderBtn} onClick={newOrderReset}>
            Start New Order
          </button>
        </div>
      </section>
    </>
  );
}

export default ConfirmPopUp;
