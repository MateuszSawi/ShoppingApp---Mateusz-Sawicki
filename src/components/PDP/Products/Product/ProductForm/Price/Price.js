import styles from './Price.module.scss';

const Price = (props) => {

  let price;
  if (props.currentCurrency === '$') {
    price = (Math.round(props.data.prices[0].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '€') {
    price = (Math.round(props.data.prices[1].price * 100) / 100).toFixed(2);
  } else if (props.currentCurrency === '¥') {
    price = (Math.round(props.data.prices[2].price * 100) / 100).toFixed(2);
  }

  return (
    <div className={styles.price}>
      <h2>Price: </h2>
      <p>{props.currentCurrency}{price}</p>
    </div>
  );
};

export default Price;