import styles from './SizeOption.module.scss';
import clsx from 'clsx';

const SizeOption = props => {
  function setSize(size) {
    props.cartItem.currentSize = size;
    props.setCartItems(current => [...current,]);
  }

  return (
    <div className={styles.productSizes}>
      <h3 className={styles.optionTitleSizes}>Size:</h3>
      <ul className={styles.choicesSizes}>
        {props.cartItem.sizes.map(size => 
          <li key={size.name}>
            <button type="button" 
              className={clsx(size.name === props.cartItem.currentSize && styles.activeSizes)} 
              onClick={() =>{setSize(size.name);}}>{size.name}</button>
          </li>  
        )}
      </ul>
    </div>
  );
};

export default SizeOption;

