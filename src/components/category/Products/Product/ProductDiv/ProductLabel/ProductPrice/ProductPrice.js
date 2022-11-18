import styles from "./ProductPrice.module.scss";
import clsx from 'clsx';

const ProductPrice = props => {

  let price = (Math.round(props.productPrice * 100) / 100).toFixed(2);

  return(
    <div>
      <p className={clsx(styles.productPrice, {[styles.productPriceAvailable]: props.availability === 'available'}, 
        {[styles.productPriceOutOfStock]: props.availability === 'out of stock'})}>
        ${price}</p>
    </div>
  );
};

export default ProductPrice;