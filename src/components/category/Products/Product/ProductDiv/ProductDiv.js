// import ProductImage from './ProductImage/ProductImage';
import LinkProduct from './LinkProduct/LinkProduct';
import styles from './ProductDiv.module.scss';
// import { Link } from 'react-router-dom';

const ProductDiv = props => {
  const currentSize = props.sizes[0].name;
  const currentColor = props.colors[0];

  // console.log('cartItems:', props.cartItems);

  const hundleSubmit = (e) => {
    e.preventDefault();
    console.log('Category Summary');
    console.log('========');
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
    console.log('========');
  }

  const onAdd = (e) => {
    e.preventDefault();
    const exist = props.cartItems.some(element => {
      if (element.props.name === props.name && 
          element.props.state === props.state &&
          element.props.currentSize === props.currentSize && 
          element.props.currentColor === props.currentColor
      ) {
        return true;
      }
      return false;
    });
    console.log('exist', exist);
    if (!exist) {
      props.setCartItems(current => [...current, {props , qty: 1}]);
    } else if (exist) {
      const searchingElement = (element) => element.props.name === props.name && 
      element.props.state === props.state &&
      element.props.currentSize === props.currentSize && 
      element.props.currentColor === props.currentColor;
      
      const index = props.cartItems.findIndex(searchingElement);
      // console.log('index: ', index);
      // console.log(props.cartItems[index].qty);
      props.cartItems[index].qty += 1;
      // console.log('NOW',props.cartItems);
    }
  };

  return (
    <div className={styles.container}>
      <LinkProduct id={props.id}
        name={props.name}
        state={props.state}
        prices={props.prices}
        sizes={props.sizes}
        colors={props.colors}
        availability={props.availability}
        category={props.category}
        description={props.description}
        currentSize={props.currentSize}
        currentColor={props.currentColor}
        currentCurrency={props.currentCurrency} />
      <form>
        <button className={styles.button} onClick={onAdd} >
          <img className={styles.buttonIcon} 
            alt={props.name}
            src={`${process.env.PUBLIC_URL}/Vector.png`} />
        </button>
      </form>
    </div>
  );
};

export default ProductDiv;


// to="/pdp/:id"


// onClick={e => console.log(props.name, props.id)} to={{
//   pathname: "/pdp/id",
//   id: '2'
// }}>

//<form onSubmit={hundleSubmit}>