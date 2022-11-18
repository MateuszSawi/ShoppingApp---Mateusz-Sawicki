import styles from './Product.module.scss';
import PropTypes from 'prop-types'
import { useState , useMemo} from 'react';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';



const Product = props => {
  const data = props.data;

  // const [currentColor, setCurrentColor] = useState(data.colors[0])
  // console.log('colors:',currentColor);

  // const [currentSize, setCurrentSize] = useState(data.sizes[0].name)
  // console.log('setSize',currentSize);

  // const prepareColorClassName = color => {
  // return styles[color + 'Color'] 
  // };

  // const getPrice = useMemo(() =>{
  //   const suma = data.sizes.find( ({ name }) => name === currentSize)
  //   return data.basePrice + suma.additionalPrice
  // }, [data.sizes, data.basePrice, currentSize]);
 
  const hundleSubmit = (e) => {
    e.preventDefault()
    console.log('Summary');
    console.log('========');
    console.log('Name:', data.title);
    // console.log('Price:', getPrice);
    // console.log('Size:', currentSize);
    // console.log('Color:', currentColor);
  }

  return (
    <article className={styles.product}>
       {/* <ProductImage title={data.title} name={data.name} currentColor={currentColor}/> */}
      <div>
        <header>
          <h2 className={styles.name}>{data.title}</h2>
          {/* <span className={styles.price}>Price: {getPrice}$</span> */}
        </header>

        {/* <ProductForm 
          data={data}
          hundleSubmit={hundleSubmit}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          prepareColorClassName={prepareColorClassName}
          getPrice={getPrice} /> */}

      </div>
    </article>
  )
};

// Product.propTypes = {
//   data:PropTypes.object

// };

export default Product;



    /* <div className={styles.imageContainer}>
      <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
       */
      /* <form onSubmit={hundleSubmit}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => 
                <li key={size.name}>
                  <button type="button" className={clsx(size.name === currentSize && styles.active)} onClick={e => setCurrentSize(size.name) }>{size.name}</button>
                </li>  
              )}
              
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
            {props.colors.map(color =>
                <li key={color}>
                  <button type="button" className={clsx(prepareColorClassName(color), color === props.color && styles.active)} onClick={e => setCurrentColor ( color )} />
                </li>
              )}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form> */