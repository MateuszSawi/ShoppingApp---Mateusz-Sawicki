import styles from './Actions.module.scss';
import Currency from './Currency/Currency';
import Cart from './Cart/Cart';

const Actions = () => {
  return(
    <div className={styles.wrapper}>
      <Currency />
      <Cart />
    </div>   
  );
};

export default Actions;