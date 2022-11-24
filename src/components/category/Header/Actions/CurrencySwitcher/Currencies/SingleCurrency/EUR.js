import styles from './SingleCurrency.module.scss';

const EUR = props => {
  return(
    <div className={styles.buttonDiv}>
      <button className={styles.buttonClass} onClick={e => props.setCurrentCurrency('€')}>
        <img 
          className={styles.currency}
          alt={styles.currency}
          src={`${process.env.PUBLIC_URL}/currencies/EUR.png`} />
      </button>
    </div>
  );
};

export default EUR;