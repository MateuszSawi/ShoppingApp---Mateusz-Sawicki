import styles from "./ProductName.module.scss";
import clsx from 'clsx';

const ProductName = props => {
  return(
    <div>
      <p className={clsx(styles.productName, {[styles.productNameAvailable]: props.availability === 'available'}, 
        {[styles.productNameOutOfStock]: props.availability === 'out of stock'})}>
        {props.productName} {props.state}</p>
    </div>
  );
};

export default ProductName;