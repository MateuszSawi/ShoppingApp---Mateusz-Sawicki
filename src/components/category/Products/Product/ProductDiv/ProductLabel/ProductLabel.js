import ProductName from './ProductName/ProductName';
import ProductPrice from './ProductPrice/ProductPrice';

const ProductLabel = props => {
  return(
    <div>
      <ProductName productName={props.name} state={props.state} availability={props.availability} />
      <ProductPrice currentCurrency={props.currentCurrency} prices={props.prices} availability={props.availability} />
    </div>
  );
};

export default ProductLabel;