import Products from './components/PDP/Products/Products';

const PDP = props => {

  return (
      <Products currentCurrency={props.currentCurrency} />
  );
};

export default PDP;

// currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} 