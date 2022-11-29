import ProductImage from '../ProductImage/ProductImage';
import ProductLabel from '../ProductLabel/ProductLabel';
import styles from './LinkProduct.module.scss';
import { Link } from 'react-router-dom';

const LinkProduct = props => {

  return (
    <Link to="/pdp" state={{from: props}}>
      <div className={styles.productDiv}>
        <ProductImage id={props.id} availability={props.availability} />
        
        <ProductLabel name={props.name} currentCurrency={props.currentCurrency} state={props.state} prices={props.prices} availability={props.availability} />
      </div>
    </Link>
  );
};

export default LinkProduct;