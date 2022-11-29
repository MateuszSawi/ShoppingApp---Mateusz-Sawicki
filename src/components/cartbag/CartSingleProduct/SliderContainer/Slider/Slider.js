import styles from './Slider.module.scss';
import clsx from 'clsx';

const Slider = props => {
  return (
    <span className={clsx(props.index === props.current ? `${styles.slide} ${styles.active}` : styles.slide)} key={props.index} >
      {props.index === props.currentImg && (
        <img 
          className={styles.image}
          alt={props.color}
          src={`${process.env.PUBLIC_URL}/images/products/${props.id}/${props.id}bag${props.currentColor}.png`} />
      )} 
    </span>
  );
};

export default Slider;