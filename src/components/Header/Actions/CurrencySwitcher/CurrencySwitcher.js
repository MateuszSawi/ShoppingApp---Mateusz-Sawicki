import CurrencyIcon from './CurrencyIcon/CurrencyIcon';
import Currencies from './Currencies/Currencies';
import React, { useState } from "react";

const CurrencySwitcher = props => {

  const [isActive, setActive] = useState("false");
  let toggleClass = isActive ? 'toggleMenu' : '';

  function handleClick(){
    setActive(isActive => !isActive);
  };

  return(
    <>
      <CurrencyIcon handleClick={handleClick} />

      <Currencies currentCurrency={props.currentCurrency} setCurrentCurrency={props.setCurrentCurrency} toggleClass={toggleClass} />
    </>
  );
};

export default CurrencySwitcher;