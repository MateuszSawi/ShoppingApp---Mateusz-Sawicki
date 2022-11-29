import ProductDiv from './ProductDiv/ProductDiv';
import styles from './Product.module.scss';
import clsx from 'clsx';

const Product = props => {
  return (
    <div className={clsx(styles.product, 
      props.currentFilter !== props.category && styles.dontShow, props.currentFilter === 'ALL' && styles.show)}>
      <ProductDiv 
        id={props.id}
        name={props.name}
        state={props.state}
        prices={props.prices}
        sizes={props.sizes}
        colors={props.colors}
        availability={props.availability}
        category={props.category}
        description={props.description}
        currentCurrency={props.currentCurrency} 
        setCartItems={props.setCartItems} 
        cartItems={props.cartItems} />
    </div>
  );
};

export default Product;