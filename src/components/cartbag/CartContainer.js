import styles from './CartContainer.module.scss';
import CartSingleProduct from './CartSingleProduct/CartSingleProduct';
import CartSummary from './CartSummary/CartSummary';
import CartTitle from './CartTitle/CartTitle';
import SeparationLine from './SeparationLine/SeparationLine';

const CartContainer = props => {
  
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
    totalCartPrice = tempPrice*cartItem.quantity + totalCartPrice;

    return 0;
  });  

  let finalTotalCartPrice = (Math.round(totalCartPrice * 100) / 100).toFixed(2);

  let tax = (Math.round(finalTotalCartPrice * 0.21 * 100) / 100).toFixed(2);

  return (
    <>
      <CartTitle />

      <div className={styles.productsContainer}>
        {props.cartItems.map((cartItem) => (
          <CartSingleProduct  
            cartItem={cartItem}        
            key={cartItem.uniqueIndex}
            name={cartItem.name}
            state={cartItem.state}
            id={cartItem.id}
            sizes={cartItem.sizes} 
            colors={cartItem.colors}
            quantity={cartItem.quantity}
            totalPrice={cartItem.totalPrice}
            currentColor={cartItem.currentColor}
            currentSize={cartItem.currentSize}
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
            currentCurrency={props.currentCurrency} />
        ))}
      </div>

      <SeparationLine />
      <CartSummary 
        tax={tax}
        totalItemsQuantity={totalItemsQuantity}
        finalTotalCartPrice={finalTotalCartPrice} 
        currentCurrency={props.currentCurrency} />
    </>
  );
};

export default CartContainer;