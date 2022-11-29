import styles from './ProductLabel.module.scss';
import CartName from './CartName/CartName';
import ProductPrice from './ProductPrice/ProductPrice';
import SizeOption from './SizeOption/SizeOption';
import ColorOption from './ColorOption/ColorOption';

const ProductLabel = props => {
  return (
    <div className={styles.productInfo}>
      <CartName cartItem={props.cartItem} />

      <ProductPrice 
        currentCurrency={props.currentCurrency} 
          cartItem={props.cartItem} />

      <SizeOption 
        cartItem={props.cartItem}
        setCartItems={props.setCartItems} />

      <ColorOption
        cartItem={props.cartItem}
        setCartItems={props.setCartItems} />
    </div>
  );
};

export default ProductLabel;