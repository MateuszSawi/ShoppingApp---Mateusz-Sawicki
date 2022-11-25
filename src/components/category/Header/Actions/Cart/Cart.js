import styles from './Cart.module.scss';
import CartProduct from './CartProduct/CartProduct';
import { useState, useEffect} from 'react';

const Cart = props => {

  const [totalItems, setTotalItems] = useState([]);  
  const [myNumArr, setMyNumArr] = useState([]);

  const [final, setFinal] = useState(0);  

  let xd = 0;

  const items = [];
  console.log('items', items);
  console.log('XDDDDDDDDDDDD', xd);
  console.log('FINAL', myNumArr);

  let tempQty = 0;

  // const searchingElement = (element) => element.name === props.name && 
  //     element.state === props.state &&
  //     element.currentSize === props.currentSize && 
  //     element.currentColor === props.currentColor;
  // const index = props.cartItems.findIndex(searchingElement);

  console.log('props.finalCart: ', props.cartItems);

  // props.cartItems.map(element => {
  //   if(element.name === props.cartItems.name && 
  //     element.state === props.cartItems.state &&
  //     element.currentSize === props.cartItems.currentSize && 
  //     element.currentColor === props.cartItems.currentColor)
  //       {
          
  //         console.log('index', props.cartItems.name);
  //         // const searchingElement = (element) => element.name === props.name && 
  //         // element.state === props.state &&
  //         // element.currentSize === props.currentSize && 
  //         // element.currentColor === props.currentColor;
  //         // const index = props.cartItem.findIndex(searchingElement);
  //         // console.log('index', index);
  //       } else {
  //         console.log('index', props)
  //       }
  // })
  // console.log('index: ', index);
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