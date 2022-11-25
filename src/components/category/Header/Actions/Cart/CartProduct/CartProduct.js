import styles from './CartProduct.module.scss';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

const CartProduct = props => {

  const [tempQuantity, setTempQuantity] = useState(0);

  const IncreaseQuantity = (e) => {
    setTempQuantity(tempQuantity+1);
  }

  const DecreaseQuantity = (e) => {
    setTempQuantity(tempQuantity-1);
  }

  let finalQuantity = tempQuantity + props.quantity;

  // ========================================================================================================

  let productPrice;
  if (props.currentCurrency === '$') {
    productPrice = (Math.round(props.prices[0].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '€') {
    productPrice = (Math.round(props.prices[1].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '¥') {
    productPrice = (Math.round(props.prices[2].price * 100) / 100).toFixed(2);
  }

  let summaryPrice = productPrice * finalQuantity;
  let finalSummaryPrice = (Math.round(summaryPrice * 100) / 100).toFixed(2);

  // ========================================================================================================

  const [currentColorCart, setCurrentColorCart] = useState(props.currentColor);
  const [currentSizeCart, setCurrentSizeCart] = useState(props.currentSize);

  // console.log('currentColor: ', currentColorCart);
  // console.log('currentSize: ', props.currentSize, currentSizeCart);

  const prepareColorClassName = color => {
    return styles[color + 'Color'] 
  };

  // console.log('props: ', props);
  // console.log('currentColorCart: ', currentColorCart);

  function setColor(color) {
    setCurrentColorCart(color);
    // props.currentColor=color;
    // console.log('currentColor: ', props);
    props.setCartItems(current => [...current,]);
  }

  function setSize(size) {
    setCurrentSizeCart(size);
    // props.currentSize = size;
    props.setCartItems(current => [...current,]);
  }

  // function updateState() {
  //   props.setCartItems(current => [...current,]);
  // }

  if(finalQuantity === 0) {
    console.log('finalQuantity: ', finalQuantity);
  }

  
  props.items.push(finalQuantity);

  const Arr = [...props.totalItems];
  // props.setTotalItems(... finalQuantity);
  Arr.push(finalQuantity);
  console.log('props.items: ', props.items, props.items[props.items.length-1]);
  let myNum = props.items[props.items.length-1];
  console.log('GFHJFJF: ', myNum, Arr);


  props.setMyNumArr(current => [...current,]);


  // let g = props.xd + myNum + props.final;

  // props.setFinal(g); 

  // console.log('LOL', props.xd + myNum, props.final);
  // props.xd = myNum;

  // let tempItems;

  // tempItems = tempItems + finalQuantity;

  //  props.tempQty = finalQuantity;

  // ========================================================================================================

  // props.totalItems.push(finalQuantity);

  // console.log('GFHJFJF: ', tempItems);

  // const name = props.name;
  // const state = props.state;
  // const currentCurrency = props.currentCurrency;
  // const sizes = props.sizes;
  // const colors = props.colors;
  // const prices = props.prices;
  // const id = props.id;

  // const obj = {
  //   name: name
  // }
  // props.setFinalCart(finalQuantity);
  // props.setFinalCart(current=>[...current, finalQuantity]);

  // console.log('GFHJFJF: ', props.finalCart);

  return(
    <div className={clsx(styles.ProductContainer, finalQuantity === 0 && styles.remove)}>
      <div className={styles.ProductInfo}>
        <h1 className={styles.title}>{props.name}</h1>
        <h1 className={styles.title}>{props.state}</h1>
        <p className={styles.price}>{props.currentCurrency}{finalSummaryPrice}</p>

        <div className={styles.sizes}>
          <h3 className={styles.title}>Size: </h3>
          <ul className={styles.choicesSizes}>
            {props.sizes.map(size => 
              <li key={size.name}>
                <button type="button" 
                  className={clsx(size.name === currentSizeCart && styles.activeSizes)} 
                  onClick={() =>{setSize(size.name);}}>{size.name}</button>
              </li>  
            )}
          </ul>
        </div>

        <div className={styles.colors}>
          <h3 className={styles.title}>Color:</h3>
          <ul className={styles.choicesColors}>
            {props.colors.map(color =>
                <li key={color}>
                  <button type="button" 
                    className={clsx(prepareColorClassName(color), currentColorCart === color && styles.activeColors)} 
                    onClick={() =>{
                      setColor(color);
                    }}
                    />
                </li>
              )}
          </ul>
        </div>

      </div>

      <div className={styles.QtyButtons}>
        <button onClick={IncreaseQuantity}>
          +
        </button>{' '}
          <p>{finalQuantity}</p>
        <button onClick={DecreaseQuantity}>
          -
        </button>
      </div>

      <div className={styles.ProductImg}>
        <img 
          alt={props.id}
          src={`${process.env.PUBLIC_URL}/images/products/${props.id}/${props.id}cart${props.currentColor}.png`} />
      </div>
    </div>
  );
};

export default CartProduct;