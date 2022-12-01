import styles from './SingleCurrency.module.scss';

const JPY = props => {
  return(
    <div className={styles.buttonDiv}>
      <button className={styles.buttonClass} onClick={e => props.setCurrentCurrency('¥')}>
        <img 
          className={styles.currency}
          alt={styles.currency}
          src={`${process.env.PUBLIC_URL}/currencies/JPY.png`} />
      </button>
    </div>
  );
};

export default JPY;