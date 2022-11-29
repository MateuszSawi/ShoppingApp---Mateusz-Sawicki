import LinkProduct from './LinkProduct/LinkProduct';
import styles from './ProductDiv.module.scss';

const ProductDiv = props => {
  const currentSize = props.sizes[0].name;
  const currentColor = props.colors[0];

  let productPrice;
  if (props.currentCurrency === '$') {
    productPrice = (Math.round(props.prices[0].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '€') {
    productPrice = (Math.round(props.prices[1].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '¥') {
    productPrice = (Math.round(props.prices[2].price * 100) / 100).toFixed(2);
  }

  let quantity = 1;
  let totalPrice;
  let uniqueIndex = 0;

  const onAdd = (e) => {
    e.preventDefault();
    const exist = props.cartItems.some(element => {
      if (element.name === props.name && 
          element.state === props.state &&
          element.currentSize === currentSize && 
          element.currentColor === currentColor
      ) {
        return true;
      }
      uniqueIndex += 1;
      return false;
    });
    if (!exist && props.availability === 'available') { 

      uniqueIndex += 1;
      
      props.setCartItems(current => [...current, {
        productPrice : productPrice,
        uniqueIndex : uniqueIndex,
        name : props.name, 
        state : props.state, 
        id : props.id, 
        currentColor : currentColor, 
        currentSize : currentSize, 
        prices : props.prices, 
        sizes : props.sizes, 
        colors : props.colors, 
        quantity : quantity,
        totalPrice: totalPrice
      }]);

    } else if (exist) {
      const searchingElement = (element) => element.name === props.name && 
      element.state === props.state &&
      element.currentSize === currentSize && 
      element.currentColor === currentColor;

      const index = props.cartItems.findIndex(searchingElement);
      props.cartItems[index].quantity += 1;
      
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
        currentSize={currentSize}
        currentColor={currentColor}
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