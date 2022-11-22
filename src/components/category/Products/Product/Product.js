// import { useState } from 'react';
// import productsData from '../../../data/products';
import ProductDiv from './ProductDiv/ProductDiv';
// import ProductLabel from './ProductLabel/ProductLabel';
import styles from './Product.module.scss'

const Product = props => {
  // const [products]  = useState(productsData);
  // console.log('products:', props);
  return (
    <div className={styles.product}>
      <ProductDiv 
        id={props.id} 
        name={props.name} 
        state={props.state} 
        price={props.price} 
        sizes={props.sizes}
        colors={props.colors}
        availability={props.availability} 
        category={props.category}
        description={props.description} />
    </div>
  );
};

export default Product;