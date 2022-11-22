import styles from './Price.module.scss';
import clsx from 'clsx';

const Price = (props) => {
  // console.log(props.data.price);
    return (
      <div className={styles.price}>
        <h2>Price: </h2>
        <p>${props.data.price}</p>
      </div>
    );
};

export default Price;