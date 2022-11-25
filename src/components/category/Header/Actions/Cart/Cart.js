import styles from './Cart.module.scss';
import CartProduct from './CartProduct/CartProduct';
import { useState, useEffect} from 'react';

const Cart = props => {

  const [totalItems, setTotalItems] = useState([]);  
  const [myNumArr, setMyNumArr] = useState([]);

  const [final, setFinal] = useState(0);  

  let xd = 0;

  const items = [];
  console.log('Cart - props.cartItems', props.cartItems);

  let tempQty = 0;

  return(
    <>
    <div className={styles.cartIconContainer}>
      <button className={styles.cartIcon} onClick={e => console.log('Empty cart button clicked')}>
        <img
          className={styles.cartIcon}
          alt={styles.cartIcon}
          src={`${process.env.PUBLIC_URL}/Empty Cart.png`} />
      </button>
    </div>

    <div className={styles.cart}>
      <div className={styles.cartFrame}>
        <div className={styles.cartBanner}>
          <h1>My Bag,</h1>
          <p>{totalItems}items</p>
        </div>

        <div className={styles.cartProducts}>
          {props.cartItems.map((cartItem) => (
            <CartProduct 
              xd={xd}
              final={final}
              setFinal={setFinal}

              myNumArr={myNumArr}
              setMyNumArr={setMyNumArr}

              items={items}
              tempQty={tempQty}
              key={cartItem.name} 
              cartItem={cartItem}
              // finalQuantity={finalQuantity}
              name={cartItem.name}
              state={cartItem.state}
              id={cartItem.id}

              totalItems={totalItems}
              setTotalItems={setTotalItems}
              // totalPrice={totalPrice}
              // setTotalPrice={setTotalPrice}
              prices={cartItem.prices}
              setCartItems={props.setCartItems}

              currentColor={cartItem.currentColor}
              currentSize={cartItem.currentSize}

              // setCurrentColor={cartItem.setCurrentColor}
              // setCurrentSize={cartItem.setCurrentSize}

              finalCart={props.finalCart} 
              setFinalCart={props.setFinalCart}

              currentCurrency={props.currentCurrency}
              sizes={cartItem.sizes} 
              colors={cartItem.colors}
              quantity={cartItem.quantity} />
          ))}
          
        </div>

        <div className={styles.cartTotal}>
          <div className={styles.cartTotalLeftText}>
            <h2>Total</h2>
          </div>
            
          <div className={styles.cartTotalRightText}>
            <p>{props.currentCurrency}</p>
          </div>
        </div>
      </div>

      <div className={styles.cartButtons}>

          
      </div>
    </div>




    </>
  );
};

export default Cart;