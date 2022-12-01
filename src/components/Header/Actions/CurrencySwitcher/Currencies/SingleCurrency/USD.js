import styles from './SingleCurrency.module.scss';

const USD = props => {
  return(
    <div className={styles.buttonDiv}>
      <button className={styles.buttonClass} onClick={e => props.setCurrentCurrency('$')}>
        <img 
          className={styles.currency}
          alt={styles.currency}
          src={`${process.env.PUBLIC_URL}/currencies/USD.png`} />
      </button>
    </div>
  );
};

export default USD;