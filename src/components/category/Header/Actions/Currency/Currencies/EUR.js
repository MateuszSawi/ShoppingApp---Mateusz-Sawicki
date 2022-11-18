import styles from './Currencies.module.scss';

const EUR = () => {

  return(
    <div className={styles.imgDiv}>
      <img 
        className={styles.currency}
        alt={styles.currency}
        src={`${process.env.PUBLIC_URL}/currencies/EUR.png`} />
    </div>
  );
};

export default EUR;