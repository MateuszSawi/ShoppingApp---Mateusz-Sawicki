import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImages from './ProductImages/ProductImages';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  return (
    <div className={styles.product}>
      <ProductImages 
        id={props.id} 
        availability={props.availability} 
        setCurrentColor={setCurrentColor} 
        currentColor={currentColor}
        colors={props.colors} />

      <ProductImage 
        id={props.id} 
        availability={props.availability} 
        currentColor={currentColor} />

      <ProductForm data={props}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          currentCurrency={props.currentCurrency}
          cartItems={props.cartItems} 
          setCartItems={props.setCartItems} />
    </div>
  )
};

export default Product;