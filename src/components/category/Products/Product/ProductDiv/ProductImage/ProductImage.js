import styles from './ProductImage.module.scss';
import clsx from 'clsx';

const ProductImage = props => {
  return (
    <div className={styles.imageContainer}>
      <img 
        className={clsx({[styles.image]: props.availability === 'out of stock'})}
        alt={props.name}
        src={`${process.env.PUBLIC_URL}/images/products/${props.id}.png`} 
      />
      <div className={clsx({[styles.textOutOfStock]: props.availability === 'out of stock'},
        {[styles.textAvailable]: props.availability === 'available'})}>
        OUT OF STOCK
      </div>
    </div>
  );
};

export default ProductImage;