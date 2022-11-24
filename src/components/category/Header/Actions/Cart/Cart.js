import styles from './Cart.module.scss';

const Cart = () => {
  return(
    <>
    <div className={styles.cartIconContainer}>
      <button className={styles.cartIcon} onClick={e => console.log('Empty cart button clicked')}>
        <img
          className={styles.cartIcon}
          alt={styles.cartIcon}
          src={`${process.env.PUBLIC_URL}/Empty Cart.png`} />
      </button>
    </div>

    <div className={styles.cart}>
      <div className={styles.cartFrame}>
        <div className={styles.cartBanner}>
          <h1>My Bag,</h1>
          <p>items</p>
        </div>

        <div className={styles.cartProducts}>

          
        </div>

        <div className={styles.cartTotal}>
          <div className={styles.cartTotalLeftText}>
            <h2>Total</h2>
          </div>
            
          <div className={styles.cartTotalRightText}>
            <p>items</p>
          </div>
        </div>
      </div>

      <div className={styles.cartButtons}>

          
      </div>
    </div>




    </>
  );
};

export default Cart;