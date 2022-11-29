import styles from './CartProduct.module.scss';
import clsx from 'clsx';

const CartProduct = props => {
  const IncreaseQuantity = (e) => {
    props.cartItem.quantity += 1;
    props.setCartItems(current => [...current,]);
  }

  const DecreaseQuantity = (e) => {;
    props.cartItem.quantity -= 1;
    props.setCartItems(current => [...current,]);
  }

  // ========================================================================================================

  let productPrice;
  if (props.currentCurrency === '$') {
    productPrice = (Math.round(props.prices[0].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '€') {
    productPrice = (Math.round(props.prices[1].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '¥') {
    productPrice = (Math.round(props.prices[2].price * 100) / 100).toFixed(2);
  }

  props.cartItem.totalPrice = (Math.round(productPrice * props.cartItem.quantity * 100) / 100).toFixed(2);

  // ========================================================================================================

  const prepareColorClassName = color => {
    return styles[color + 'Color'] 
  };

  function setColor(color) {
    props.cartItem.currentColor = color;
    props.setCartItems(current => [...current,]);
  }

  function setSize(size) {
    props.cartItem.currentSize = size;
    props.setCartItems(current => [...current,]);
  }

  return(
    <div className={clsx(styles.ProductContainer, props.cartItem.quantity === 0 && styles.remove)}>
      <div className={styles.ProductInfo}>
        <h1 className={styles.title}>{props.name}</h1>
        <h1 className={styles.title}>{props.state}</h1>
        <p className={styles.price}>{props.currentCurrency}{props.cartItem.totalPrice}</p>

        <div className={styles.sizes}>
          <h3 className={styles.title}>Size:</h3>
          <ul className={styles.choicesSizes}>
            {props.sizes.map(size => 
              <li key={size.name}>
                <button type="button" 
                  className={clsx(size.name === props.cartItem.currentSize && styles.activeSizes)} 
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
                  className={clsx(prepareColorClassName(color), props.cartItem.currentColor === color && styles.activeColors)} 
                  onClick={() =>{setColor(color);}}/>
              </li>
            )}
          </ul>
        </div>

      </div>

      <div className={styles.qtyButtons}>
        <button className={styles.buttonPlus} onClick={IncreaseQuantity}>
          +
        </button>{' '}
          <p className={styles.quantity}>{props.cartItem.quantity}</p>
        <button className={styles.buttonMinus} onClick={DecreaseQuantity}>
          -
        </button>
      </div>

      <div className={styles.productImg}>
        <img 
          alt={props.id}
          src={`${process.env.PUBLIC_URL}/images/products/${props.id}/${props.id}cart${props.currentColor}.png`} />
      </div>
    </div>
  );
};

export default CartProduct;