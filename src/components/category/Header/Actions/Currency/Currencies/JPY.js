import styles from './Currencies.module.scss';

const JPY = () => {

  return(
    <div className={styles.imgDiv}>
      <img 
        className={styles.currency}
        alt={styles.currency}
        src={`${process.env.PUBLIC_URL}/currencies/JPY.png`} />
    </div>
  );
};

export default JPY;