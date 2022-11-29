import styles from './LeftArrow.module.scss';

const LeftArrow = props => {
  return(
    <img
      className={styles.leftArrow}
      alt={props.name}
      onClick={props.prevSlide}
      src={`${process.env.PUBLIC_URL}/leftArrow.png`} />
  );
};

export default LeftArrow;