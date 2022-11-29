import styles from './Currencies.module.scss';
import USD from './SingleCurrency/USD';
import EUR from './SingleCurrency/EUR';
import JPY from './SingleCurrency/JPY';
import clsx from 'clsx';

const Currencies = props => {
  return(
    <div className={clsx(styles.currenciesDiv, `${props.toggleClass}`)}>
      <ul>
        <li>
          <USD currentCurrency={props.currentCurrency} setCurrentCurrency={props.setCurrentCurrency} />
        </li>

        <li>
          <EUR currentCurrency={props.currentCurrency} setCurrentCurrency={props.setCurrentCurrency} />
        </li>

        <li>
          <JPY currentCurrency={props.currentCurrency} setCurrentCurrency={props.setCurrentCurrency} />
        </li>
      </ul>
    </div>
  );
};

export default Currencies;