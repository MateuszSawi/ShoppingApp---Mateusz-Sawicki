import styles from './ProductImage.module.scss';

const ProductImage = props => {

  return (
    <div className={styles.imageContainer}>
      <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/${props.id}/${props.id}big${props.currentColor}.png`} />

    </div>
  )
}

export default ProductImage;

// ${props.id}