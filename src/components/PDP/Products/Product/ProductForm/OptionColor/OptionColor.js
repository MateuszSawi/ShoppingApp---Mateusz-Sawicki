import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types'

const OptionColor = props => {

  const prepareColorClassName = color => {
    return styles[color + 'Color'] 
  };
  // let color = props.data.colors[0]
  // let current = props.data.colors[0];
  // props.currentColor = current;
  // props.setCurrentColor(props.data.colors[0]);

  // console.log('props.data.currentColor: ', props.currentColor);
  // console.log('props.data.colors[0]: ', props.data.colors[0]);
  // console.log('optionColor: ', props.data.colors, props.currentColor, prepareColorClassName('blue'));
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

OptionColor.propTypes = {
  currentColor: PropTypes.string,
  data: PropTypes.object,
  setCurrentColor: PropTypes.func,
  prepareColorClassName: PropTypes.func
}
export default OptionColor;