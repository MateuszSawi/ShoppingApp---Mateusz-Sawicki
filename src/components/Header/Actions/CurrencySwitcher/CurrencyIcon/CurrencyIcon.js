import styles from './CurrencyIcon.module.scss';
import React, { useState } from "react";

const CurrencyIcon = props => {
  const [icon, setIcon] = useState("false");

  let toggleIcon = icon ? 'open' : 'close';

  function handleClick(){
    setIcon(icon => !icon);
  };

  return(
    <div className={styles.currencyContainer}>
      <button className={styles.currencyIcon} onClick={()=>{
        props.handleClick();
        handleClick();
      }}>
        <img 
          className={styles.currencyIcon}
          alt={styles.currencyIcon}
          src={`${process.env.PUBLIC_URL}/currencyIcon.png`} />
        <img 
          className={styles.togglingIcon}
          alt={styles.currencyIcon}
          src={`${process.env.PUBLIC_URL}/${toggleIcon}.png`} />
      </button>
    </div>
  );
};

export default CurrencyIcon;