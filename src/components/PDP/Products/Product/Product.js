import styles from './Product.module.scss';
import PropTypes from 'prop-types'
import { useState , useMemo, useEffect} from 'react';
import ProductImages from './ProductImages/ProductImages';
import ProductImage from './ProductImage/ProductImage';
import ProductForm from './ProductForm/ProductForm';



const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0])

  const [currentSize, setCurrentSize] = useState(props.sizes[0].name)
 
  const hundleSubmit = (e) => {
    e.preventDefault()
    console.log('Summary');
    console.log('========');
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
  }

  return (
    <div className={styles.product}>
       <ProductImages id={props.id} setCurrentColor={setCurrentColor} currentColor={currentColor} colors={props.colors}/>
       <ProductImage id={props.id} currentColor={currentColor}/>
       <ProductForm data={props}
          hundleSubmit={hundleSubmit}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor} />
    </div>
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

        //------

      //   <ProductImage id={props.id}/>
      // <div>
      //   <header>
      //     <h1 className={styles.name}>{props.name}</h1>
      //     <h2 className={styles.name}>{props.state}</h2>
      //     <p>Price: </p>
      //     <p>{props.price}$</p>
      //   </header>

      //   <ProductForm 
      //     data={props}
      //     hundleSubmit={hundleSubmit}
      //     currentSize={currentSize}
      //     setCurrentSize={setCurrentSize}
      //     currentColor={currentColor}
      //     setCurrentColor={setCurrentColor}
      //     prepareColorClassName={prepareColorClassName}
      //      /> 

      // </div>