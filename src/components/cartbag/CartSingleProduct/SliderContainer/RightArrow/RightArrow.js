import styles from './RightArrow.module.scss';
import clsx from 'clsx';

const RightArrow = props => {
  return(
    <img
      className={clsx(props.length === 1 ? styles.dontShowArrow : styles.rightArrow)}
      alt={props.name}
      onClick={props.nextSlide}
      src={`${process.env.PUBLIC_URL}/rightArrow.png`} />
  );
};

export default RightArrow;