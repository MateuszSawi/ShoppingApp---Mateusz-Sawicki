import Products from './Products/Products';

const PDP = props => {
  return (
      <Products cartItems={props.cartItems} setCartItems={props.setCartItems} currentCurrency={props.currentCurrency} />
  );
};

export default PDP;