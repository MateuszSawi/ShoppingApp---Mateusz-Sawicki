import styles from './OrderButton.module.scss';

const OrderButton = props => {

  const onClick = () => {
    console.log('============ NEW ORDER =============');
    props.cartItems.map(cartItem => {
      if (cartItem.quantity !== 0) {
        console.log('');
        console.log('NEW PRODUCT:');
        console.log('id: ', cartItem.id);
        console.log('name: ', cartItem.name);
        console.log('state: ', cartItem.state);
        console.log('currentColor: ', cartItem.currentColor);
        console.log('currentSize: ', cartItem.currentSize);
        console.log('price: ', cartItem.productPrice, props.currentCurrency);
        console.log('quantity: ', cartItem.quantity);
        console.log('total price: ', cartItem.totalPrice, props.currentCurrency);
        cartItem.uniqueIndex += 1;
        console.log(cartItem.uniqueIndex);
      }
    return 0;
    })
    console.log('=========== END OF ORDER ===========');
    console.log('');
  }
  
  return(
    <div className={styles.orderButtonDiv}>
      <button className={styles.orderButton} onClick={onClick}>
        <p className={styles.order}>ORDER</p>
      </button>
    </div>
  );
};

export default OrderButton;