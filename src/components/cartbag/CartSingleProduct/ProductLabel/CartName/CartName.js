import styles from './CartName.module.scss';

const CartName = props => {
  return (
    <div className={styles.productName}>
      <h1>{props.cartItem.name}</h1>
      <h2>{props.cartItem.state}</h2>
    </div>
  );
};

export default CartName;