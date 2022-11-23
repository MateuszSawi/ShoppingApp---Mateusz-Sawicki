import ProductImage from './ProductImage/ProductImage';
import ProductLabel from './ProductLabel/ProductLabel';
import styles from './ProductDiv.module.scss';
import { Link } from 'react-router-dom';

const ProductDiv = props => {
  
  const currentSize = props.sizes[0].name;
  const currentColor = props.colors[0];

  // console.log('currentSize: ', currentSize);
  // console.log('currentColor: ', currentColor);

  const hundleSubmit = (e) => {
    e.preventDefault()
    console.log('Category Summary');
    console.log('========');
    console.log('Size:', currentSize);
    console.log('Color:', currentColor);
    console.log('========');
  }

  // console.log('propu:', props);
  return (
    <div className={styles.container}>
      <Link to="/pdp" state={{from: props}}>
        <div className={styles.productDiv}>
          <ProductImage id={props.id} availability={props.availability}/>
          
          <ProductLabel name={props.name} state={props.state} price={props.price} availability={props.availability} />
        </div>
      </Link>
      <form onSubmit={hundleSubmit}>
        <button className={styles.button}>
          <img className={styles.buttonIcon}
            alt={props.name}
            src={`${process.env.PUBLIC_URL}/Vector.png`} />
        </button>
      </form>
    </div>
  );
};

export default ProductDiv;


// to="/pdp/:id"


// onClick={e => console.log(props.name, props.id)} to={{
//   pathname: "/pdp/id",
//   id: '2'
// }}>