// import styles from "./ProductLabel.module.scss";
import ProductName from './ProductName/ProductName';
import ProductPrice from './ProductPrice/ProductPrice';

const ProductLabel = props => {
  return(
    <div>
      <ProductName productName={props.name} availability={props.availability}/>
      <ProductPrice productPrice={props.price} availability={props.availability}/>
    </div>
  );
};

// ProductLabel.propTypes = {
//   hundleSubmit: PropTypes.func,
//   data: PropTypes.object,
//   currentSize: PropTypes.string,
//   currentColor: PropTypes.string,
//   setCurrentSize: PropTypes.func,
//   setCurrentColor: PropTypes.func,
//   prepareColorClassName: PropTypes.func
// }

export default ProductLabel;