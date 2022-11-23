import styles from './Currency.module.scss';
import React, { useState } from "react";
import clsx from 'clsx';

const Currency = () => {

  const [isActive, setActive] = useState("false");

  let toggleClass = isActive ? 'toggleMenu' : '';

  function handleClick(){
    setActive(isActive => !isActive);
  };

  return(
    <>
      <div className={styles.currencyContainer}>
        <button className={clsx(styles.currencyIcon)} onClick={handleClick}>
          <img 
            className={styles.currencyIcon}
            alt={styles.currencyIcon}
            src={`${process.env.PUBLIC_URL}/Currency.png`} />
        </button>
      </div>

      <div className={clsx(styles.currenciesDiv,`${toggleClass}`)}>
        <ul>
          <li>
            <div className={styles.buttonDiv}>
              <button className={styles.buttonClass}>
                <img 
                  className={styles.currency}
                  alt={styles.currency}
                  src={`${process.env.PUBLIC_URL}/currencies/USD.png`} />
              </button>
            </div>
          </li>

          <li>
            <div className={styles.buttonDiv}>
              <button className={styles.buttonClass}>
                <img 
                  className={styles.currency}
                  alt={styles.currency}
                  src={`${process.env.PUBLIC_URL}/currencies/EUR.png`} />
              </button>
            </div>
          </li>

          <li>
            <div className={styles.buttonDiv}>
              <button className={styles.buttonClass}>
                <img 
                  className={styles.currency}
                  alt={styles.currency}
                  src={`${process.env.PUBLIC_URL}/currencies/JPY.png`} />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Currency;