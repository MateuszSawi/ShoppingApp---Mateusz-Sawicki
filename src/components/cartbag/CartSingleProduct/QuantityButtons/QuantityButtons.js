import styles from './QuantityButtons.module.scss';

const QuantityButtons = props => {

  return(
    <div className={styles.qtyButtons}>
      <div className={styles.qtyPlus}>
        <button className={styles.cursor} onClick={props.increaseQuantity}>
          +
        </button>
      </div>

      <div className={styles.qty}>
        <p className={styles.quantity}>{props.cartItem.quantity}</p>
      </div>

      <div className={styles.qtyMinus}>
        <button className={styles.cursor} onClick={props.decreaseQuantity}>
          -
        </button>
      </div>
    </div>
  );
};

export default QuantityButtons;