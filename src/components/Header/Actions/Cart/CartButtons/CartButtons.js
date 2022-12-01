import styles from './CartButtons.module.scss';
import { Link } from 'react-router-dom';

const CartButtons = props => {

  const onClick = () => {
    console.log('============ NEW ORDER =============');
    props.cartItems.map(cartItem => {
      if (cartItem.quantity !== 0) {
        console.log('');
        console.log('NEW PRODUCT:');
        console.log('id: ', cartItem.id);
        console.log('name: ', cartItem.name);
        console.log('state: ', cartItem.state);
        console.log('currentColor: ', cartItem.currentColor);
        console.log('currentSize: ', cartItem.currentSize);
        console.log('price: ', cartItem.productPrice, props.currentCurrency);
        console.log('quantity: ', cartItem.quantity);
        console.log('total price: ', cartItem.totalPrice, props.currentCurrency);
      }
    return 0;
    })
    console.log('=========== END OF ORDER ===========');
    console.log('');
  }

  return(
    <div className={styles.cartButtons}>
      <Link to="/cartbag">
        <div className={styles.ViewBagButtonDiv}>
          <button className={styles.ViewBagButton}>
            <p>VIEW BAG</p>
          </button>
        </div>
      </Link>
        
      <div className={styles.CheckOutButtonDiv}>
        <button className={styles.CheckOutButton} onClick={onClick}>
          <p>CHECK OUT</p>
        </button>
      </div>
    </div>
  );
};

export default CartButtons;