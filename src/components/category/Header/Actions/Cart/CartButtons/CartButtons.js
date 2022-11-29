import styles from './CartButtons.module.scss';
import { Link } from 'react-router-dom';

const CartButtons = props => {

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
        <button className={styles.CheckOutButton}>
          <p>CHECK OUT</p>
        </button>
      </div>
    </div>
  );
};

export default CartButtons;