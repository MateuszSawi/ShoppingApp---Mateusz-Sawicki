import LinkProduct from './LinkProduct/LinkProduct';
import styles from './ProductDiv.module.scss';
import { useState } from 'react';

const ProductDiv = props => {
  const currentSize = props.sizes[0].name;
  const currentColor = props.colors[0];

  // const [currentColor] = useState(props.colors[0]);
  console.log('FIRST: ', props.cartItems);

  // const name = props.name;
  // const state = props.state;
  // const currentCurrency = props.currentCurrency;
  // const sizes = props.sizes;
  // const colors = props.colors;
  // const prices = props.prices;
  // const id = props.id;
  let quantity = 1;

  const onAdd = (e) => {
    e.preventDefault();
    // window.location.reload(false);
    const exist = props.cartItems.some(element => {
      // console.log('element.currentSize: ', element.currentSize);
      // console.log('element.currentSize: ', name);
      if (element.name === props.name && 
          element.state === props.state &&
          element.currentSize === currentSize && 
          element.currentColor === currentColor
      ) {
        return true;
      }
      
      return false;
    });
    // console.log('exist', exist);
    if (!exist && props.availability === 'available') { 
      
      props.setCartItems(current => [...current, {
        name : props.name, 
        state : props.state, 
        id : props.id, 
        currentColor : currentColor, 
        currentSize : currentSize, 
        prices : props.prices, 
        sizes : props.sizes, 
        colors : props.colors, 
        // setCurrentColor: setCurrentColor,
        quantity : quantity}]);
    } else if (exist) {
      const searchingElement = (element) => element.name === props.name && 
      element.state === props.state &&
      element.currentSize === currentSize && 
      element.currentColor === currentColor;

      const index = props.cartItems.findIndex(searchingElement);
      props.cartItems[index].quantity += 1;
      
      // console.log('HHHHHH', props.cartItems[index].quantity);
      props.setCartItems(current => [...current,]);
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
        currentSize={currentSize} //props
        currentColor={currentColor}
        // setCurrentColor={setCurrentColor}
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

// onClick={onAdd}
// to="/pdp/:id"


// onClick={e => console.log(props.name, props.id)} to={{
//   pathname: "/pdp/id",
//   id: '2'
// }}>

//<form onSubmit={hundleSubmit}>