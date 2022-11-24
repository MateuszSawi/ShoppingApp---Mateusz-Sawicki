import styles from './CartButton.module.scss';
import clsx from 'clsx';

const CartButton = (props) => {
  return (<button className={clsx(styles.button, props.className)}>ADD TO CART</button>);
};

export default CartButton;