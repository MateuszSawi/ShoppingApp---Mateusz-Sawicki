import React from 'react';
import Product from './Product/Product';
import styles from './Products.module.scss';
import { useLocation} from 'react-router-dom';

const Products = props => {
  const location = useLocation();
  let product = location.state.from;

  return (
    <section className={styles.sectionProducts}>
      <Product 
        id={product.id}
        name={product.name}
        state={product.state}
        prices={product.prices}
        sizes={product.sizes}
        colors={product.colors}
        availability={product.availability}
        description={product.description}
        currentCurrency={props.currentCurrency}
        cartItems={props.cartItems} 
        setCartItems={props.setCartItems} />
    </section>
  );
};

export default Products;