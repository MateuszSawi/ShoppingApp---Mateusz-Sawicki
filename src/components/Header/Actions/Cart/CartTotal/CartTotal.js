import styles from './CartTotal.module.scss';

const CartTotal = props => {

  return(
    <div className={styles.cartTotal}>
      <div className={styles.cartTotalLeftText}>
        <h2>Total</h2>
      </div>
        
      <div className={styles.cartTotalRightText}>
        <p>{props.currentCurrency}{props.finalTotalCartPrice}</p>
      </div>
    </div>
  );
};

export default CartTotal;