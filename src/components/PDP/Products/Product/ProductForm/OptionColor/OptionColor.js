import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = props => {
  const prepareColorClassName = color => {
    return styles[color + 'Color'] 
  };

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Color:</h3>
        <ul className={styles.choices}>
          {props.data.colors.map(color =>
              <li key={color}>
                <button type="button" className={clsx(prepareColorClassName(color), props.currentColor === color && styles.active)} 
                  onClick={e => props.setCurrentColor(color)} />
              </li>
            )}
        </ul>
    </div>
   
  )
}

export default OptionColor;