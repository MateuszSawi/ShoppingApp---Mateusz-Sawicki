import styles from './ProductPrice.module.scss';

const CartPrice = props => {
  return (
    <div className={styles.productPrice}>
      <p className={styles.price}>{props.currentCurrency}{props.cartItem.totalPrice}</p>
    </div>
  );
};

export default CartPrice;