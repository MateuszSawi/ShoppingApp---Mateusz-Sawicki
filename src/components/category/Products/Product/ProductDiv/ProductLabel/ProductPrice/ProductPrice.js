import styles from "./ProductPrice.module.scss";
import clsx from 'clsx';

const ProductPrice = props => {

  let price;
  if (props.currentCurrency === '$') {
    price = (Math.round(props.prices[0].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '€') {
    price = (Math.round(props.prices[1].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '¥') {
    price = (Math.round(props.prices[2].price * 100) / 100).toFixed(2);
  }

  return(
    <div>
      <p className={clsx(styles.productPrice, {[styles.productPriceAvailable]: props.availability === 'available'}, 
        {[styles.productPriceOutOfStock]: props.availability === 'out of stock'})}>
        {props.currentCurrency}{price}</p>
    </div>
  );
};

export default ProductPrice;