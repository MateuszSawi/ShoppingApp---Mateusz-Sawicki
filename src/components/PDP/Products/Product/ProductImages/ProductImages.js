import styles from './ProductImages.module.scss';

const ProductImages = props => {
  return (
    <div className={styles.smallImagesContainer}>
      {props.colors.map(color => <img 
        key={color}
        alt={props.title}
        src={`${process.env.PUBLIC_URL}/images/products/${props.id}/${props.id}small${color}.png`} 
        onClick={e => props.setCurrentColor(color)} />)}
    </div>
  );
};

export default ProductImages;