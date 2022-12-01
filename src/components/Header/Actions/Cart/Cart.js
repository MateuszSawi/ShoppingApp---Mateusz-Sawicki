import styles from './Cart.module.scss';
import CartProduct from './CartProduct/CartProduct';
import CartIcon from './CartIcon/CartIcon';
import CartHeading from './CartHeading/CartHeading';
import CartTotal from './CartTotal/CartTotal';
import CartButtons from './CartButtons/CartButtons';
import React, { useState } from "react";
import clsx from 'clsx';

const Cart = props => {
  let totalItemsQuantity = 0;
  let totalCartPrice = 0;

  props.cartItems.map(cartItem => {
    totalItemsQuantity += cartItem.quantity;

    let tempPrice;
    if (props.currentCurrency === '$') {
      tempPrice = (Math.round(cartItem.prices[0].price * 100) / 100).toFixed(2);
    } else if (props.currentCurrency === '€') {
      tempPrice = (Math.round(cartItem.prices[1].price * 100) / 100).toFixed(2);
    } else if (props.currentCurrency === '¥') {
      tempPrice = (Math.round(cartItem.prices[2].price * 100) / 100).toFixed(2);
    }
    totalCartPrice = tempPrice * cartItem.quantity + totalCartPrice;

    return 0;
  });  

  let finalTotalCartPrice = (Math.round(totalCartPrice * 100) / 100).toFixed(2);

  const [isActive, setActive] = useState('false');
  let toggleMenu = isActive ? 'toggleMenu' : '';

  function handleClick(){
    setActive(toggleMenu => !toggleMenu);
  };

  return(
    <>
      <CartIcon totalItemsQuantity={totalItemsQuantity} handleClick={handleClick} />
      
      <div className={clsx(styles.cart, `${toggleMenu}`)}>
        <div className={styles.cartFrame}>
          <CartHeading totalItemsQuantity={totalItemsQuantity} />

          <div className={styles.cartProducts}>
            {props.cartItems.map((cartItem) => (
              <CartProduct          
                key={cartItem.uniqueIndex} 
                cartItem={cartItem}
                name={cartItem.name}
                state={cartItem.state}
                id={cartItem.id}
                prices={cartItem.prices}
                setCartItems={props.setCartItems}
                currentColor={cartItem.currentColor}
                currentSize={cartItem.currentSize}
                currentCurrency={props.currentCurrency}
                sizes={cartItem.sizes} 
                colors={cartItem.colors}
                quantity={cartItem.quantity}
                totalPrice={cartItem.totalPrice} />
            ))}
          </div>

          <CartTotal currentCurrency={props.currentCurrency} finalTotalCartPrice={finalTotalCartPrice} />
        </div>

        <CartButtons currentCurrency={props.currentCurrency} cartItems={props.cartItems}/>
      </div>
    </>
  );
};

export default Cart;