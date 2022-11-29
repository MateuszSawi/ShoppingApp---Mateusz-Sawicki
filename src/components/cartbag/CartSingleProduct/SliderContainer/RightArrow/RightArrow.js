import styles from './RightArrow.module.scss';

const RightArrow = props => {
  return(
    <img
      className={styles.rightArrow}
      alt={props.name}
      onClick={props.nextSlide}
      src={`${process.env.PUBLIC_URL}/rightArrow.png`} />
  );
};

export default RightArrow;