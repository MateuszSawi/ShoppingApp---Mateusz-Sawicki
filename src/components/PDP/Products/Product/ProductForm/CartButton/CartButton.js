import styles from './CartButton.module.scss';
import clsx from 'clsx';

const CartButton = (props) => {

  let productPrice;
  if (props.currentCurrency === '$') {
    productPrice = (Math.round(props.data.prices[0].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '€') {
    productPrice = (Math.round(props.data.prices[1].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '¥') {
    productPrice = (Math.round(props.data.prices[2].price * 100) / 100).toFixed(2);
  }

  let quantity = 1;
  let totalPrice;
  let uniqueIndex = 0;
  
const onAdd = (e) => {
  e.preventDefault();
  const exist = props.cartItems.some(element => {
    if (element.name === props.data.name && 
        element.state === props.data.state &&
        element.currentSize === props.currentSize && 
        element.currentColor === props.currentColor
    ) {
      return true;
    }
    uniqueIndex += 1;
    return false;
  });
  if (!exist && props.data.availability === 'available') { 

    uniqueIndex += 1;
    
    props.setCartItems(current => [...current, {
      productPrice : productPrice,
      uniqueIndex : uniqueIndex,
      name : props.data.name, 
      state : props.data.state, 
      id : props.data.id, 
      currentColor : props.currentColor, 
      currentSize : props.currentSize, 
      prices : props.data.prices, 
      sizes : props.data.sizes, 
      colors : props.data.colors, 
      quantity : quantity,
      totalPrice: totalPrice
    }]);

  } else if (exist) {
    const searchingElement = (element) => element.name === props.data.name && 
    element.state === props.data.state &&
    element.currentSize === props.currentSize && 
    element.currentColor === props.currentColor;

    const index = props.cartItems.findIndex(searchingElement);
    props.cartItems[index].quantity += 1;
    
    props.setCartItems(current => [...current,]);
  }
};

  return (<button className={clsx(styles.button, props.className)} onClick={onAdd} >ADD TO CART</button>);
};

export default CartButton;