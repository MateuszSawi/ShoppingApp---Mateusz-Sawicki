import styles from './Icon.module.scss';

const Icon = () => {
  return(
    <div className={styles.iconContainer}>
      <img 
          className={styles.icon}
          alt={styles.icon}
          src={`${process.env.PUBLIC_URL}/a-logo.png`} />
    </div>   
  );
};

export default Icon;