import styles from './ColorOption.module.scss';
import clsx from 'clsx';

const ColorOption = props => {
  const prepareColorClassName = color => {
    return styles[color + 'Color'] 
  };

  function setColor(color) {
    props.cartItem.currentColor = color;
    props.setCartItems(current => [...current,]);
  }

  return (
    <div className={styles.productColors}>
      <h3 className={styles.optionTitleColors}>Color:</h3>
      <ul className={styles.choicesColors}>
        {props.cartItem.colors.map(color =>
          <li key={color}>
            <button type="button" 
              className={clsx(prepareColorClassName(color), props.cartItem.currentColor === color && styles.activeColors)} 
              onClick={() =>{setColor(color);}}/>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ColorOption;

