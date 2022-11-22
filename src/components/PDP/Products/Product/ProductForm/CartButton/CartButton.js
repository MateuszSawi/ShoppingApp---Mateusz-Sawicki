import styles from './CartButton.module.scss';
import clsx from 'clsx';

const CartButton = (props) => {
  return (<button className={clsx(styles.button, props.className)}>ADD TO CART</button>);
};

export default CartButton;


{/* <CartButton >
    <span className="fa fa-shopping-cart" />
</CartButton>


return (<button className={clsx(styles.button, props.className)}>{props.children}</button>); */}