import styles from './CurrenciesDiv.module.scss';
import USD from './USD';
import EUR from './EUR';
import JPY from './JPY';

const CurrenciesDiv = () => {

  return(
      <div className={styles.currenciesDiv}>
        <USD />
        <EUR />
        <JPY />
      </div>
  );
};

export default CurrenciesDiv;