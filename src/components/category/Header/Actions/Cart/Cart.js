import styles from './Cart.module.scss';

const Cart = () => {
  return(   
    <div className={styles.cart}>
      <button className={styles.cartIcon} onClick={e => console.log('Empty cart button clicked')}>
        <img 
          className={styles.cartIcon}
          alt={styles.cartIcon}
          src={`${process.env.PUBLIC_URL}/Empty-Cart.png`} /> 
      </button>
    </div>  
  );
};

export default Cart;