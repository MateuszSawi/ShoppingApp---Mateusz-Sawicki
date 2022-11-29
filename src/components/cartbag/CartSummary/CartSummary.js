import styles from './CartSummary.module.scss';

const CartSummary = props => {
  return (
    <div className={styles.cartSummary}>
      <div className={styles.summary}>
        <h1>Tax 21%:</h1>
        <h2>{props.currentCurrency}{props.tax}</h2>
      </div>

      <div className={styles.summary}>
        <h1>Quantity:</h1>
        <h2>{props.totalItemsQuantity}</h2>
      </div>

      <div className={styles.summary}>
        <h1>Total:</h1>
        <h2>{props.currentCurrency}{props.finalTotalCartPrice}</h2>
      </div>
    </div>
  );
};

export default CartSummary;