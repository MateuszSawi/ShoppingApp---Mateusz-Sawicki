import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = props => {
  
 return (
  <div className={styles.sizes}>
    <h3 className={styles.optionLabel}>Size: </h3>
    <ul className={styles.choices}>
      {props.data.sizes.map(size => 
        <li key={size.name}>
          <button type="button" className={clsx(size.name === props.currentSize && styles.active)} 
            onClick={e => props.setCurrentSize(size.name)}>{size.name}</button>
        </li>  
      )}
    </ul>
  </div>
 );
};

export default OptionSize;