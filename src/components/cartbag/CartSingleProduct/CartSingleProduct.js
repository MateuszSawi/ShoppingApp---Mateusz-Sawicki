import styles from './CartSingleProduct.module.scss';
import ProductLabel from './ProductLabel/ProductLabel';
import QuantityButtons from './QuantityButtons/QuantityButtons';
import SliderContainer from './SliderContainer/SliderContainer';
import clsx from 'clsx';

const CartSingleProduct = props => {
  const increaseQuantity = (e) => {
    props.cartItem.quantity += 1;
    props.setCartItems(current => [...current,]);
  }

  const decreaseQuantity = (e) => {;
    props.cartItem.quantity -= 1;
    props.setCartItems(current => [...current,]);
  }

  let length = props.cartItem.colors.length;

  return (
    <div className={clsx(styles.singleProductContainer, props.quantity === 0 && styles.removeProduct )}>
      <div className={styles.productSeparation}></div>


      <div className={styles.productWrapper}>
        <ProductLabel 
          cartItem={props.cartItem}
          currentCurrency={props.currentCurrency}
          setCartItems={props.setCartItems} />

        <QuantityButtons 
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          cartItem={props.cartItem} />

        <SliderContainer 
          length={length}
          cartItem={props.cartItem}
          colors={props.cartItem.colors}
          id={props.cartItem.id}
          setCartItems={props.setCartItems} />
      </div>
    </div>
  );
};

export default CartSingleProduct;