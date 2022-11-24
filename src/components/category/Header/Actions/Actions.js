import styles from './Actions.module.scss';
import CurrencySwitcher from './CurrencySwitcher/CurrencySwitcher';
import Cart from './Cart/Cart';

const Actions = props => {
  return(
    <div className={styles.wrapper}>
      <CurrencySwitcher currentCurrency={props.currentCurrency} setCurrentCurrency={props.setCurrentCurrency} />
      <Cart cartItems={props.cartItems} setCartItems={props.setCartItems} />
    </div>
  );
};

export default Actions;