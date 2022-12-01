import styles from './CartIcon.module.scss';
import clsx from 'clsx';

const CartIcon = props => { 

  return(
    <div className={styles.cartIconContainer}>
      <button className={clsx(styles.cartIcon)} onClick={()=>{props.handleClick()}} >
        <img
          className={styles.cartIcon}
          alt={styles.cartIcon}
          src={`${process.env.PUBLIC_URL}/Empty Cart.png`} />
          
        <p className={clsx(props.totalItemsQuantity === 0 ? styles.dontShowCartIconQuantity : styles.showCartIconQuantity)}>
          {props.totalItemsQuantity}
        </p>
      </button>
    </div>
  );
};

export default CartIcon;