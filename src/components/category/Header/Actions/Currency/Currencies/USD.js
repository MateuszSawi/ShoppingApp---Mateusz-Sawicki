import styles from './Currencies.module.scss';

const USD = () => {

  return(
    <div className={styles.imgDiv}>
      <img 
        className={styles.currency}
        alt={styles.currency}
        src={`${process.env.PUBLIC_URL}/currencies/USD.png`} />
    </div>
  );
};

export default USD;