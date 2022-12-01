import styles from './LeftArrow.module.scss';
import clsx from 'clsx';

const LeftArrow = props => {
  return(
    <img
    className={clsx(props.length === 1 ? styles.dontShowArrow : styles.leftArrow)}
      alt={props.name}
      onClick={props.prevSlide}
      src={`${process.env.PUBLIC_URL}/leftArrow.png`} />
  );
};

export default LeftArrow;