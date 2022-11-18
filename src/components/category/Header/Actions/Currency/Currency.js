import styles from './Currency.module.scss';
import CurrenciesDiv from './Currencies/CurrenciesDiv';

const Currency = () => {
  return(
    <div className={styles.currencyContainer}>
      <button className={styles.currencyIcon} onClick={e => console.log('Currency button clicked')}>
        <img 
          className={styles.currencyIcon}
          alt={styles.currencyIcon}
          src={`${process.env.PUBLIC_URL}/Currency.png`} />
      </button>
      <CurrenciesDiv />
    </div>
  );
};

export default Currency;