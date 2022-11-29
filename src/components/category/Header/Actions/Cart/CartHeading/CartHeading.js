import styles from './CartHeading.module.scss';

const CartHeading = props => {

  return(
  <div className={styles.cartBanner}>
    <h1>My Bag,</h1>
    <p>{props.totalItemsQuantity} items</p>
  </div>
  );
};

export default CartHeading;