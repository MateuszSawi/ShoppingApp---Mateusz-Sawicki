import { useState } from 'react';
import productsData from '../../../data/products';
import Product from './Product/Product';
import styles from './Products.module.scss'

const Products = props => {
  const [products]  = useState(productsData);

  return (
    <section className={styles.sectionProducts}>
      {products.map(product => 
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          state={product.state}
          prices={product.prices}
          sizes={product.sizes}
          colors={product.colors}
          availability={product.availability}
          category={product.category}
          description={product.description}
          currentFilter={props.currentFilter} 
          setCurrentFilter={props.setCurrentFilter}
          currentCurrency={props.currentCurrency} 
          cartItems={props.cartItems} 
          setCartItems={props.setCartItems} />
      )}
    </section>
  );
};

export default Products;