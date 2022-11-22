import ProductImage from './ProductImage/ProductImage';
import ProductLabel from './ProductLabel/ProductLabel';
import styles from './ProductDiv.module.scss';
import { Link } from 'react-router-dom';

const ProductDiv = props => {

  

  return (
      <Link to="/pdp" state={{from: props}}>
        <div className={styles.productDiv}>
          <ProductImage id={props.id} availability={props.availability}/>
          <ProductLabel name={props.name} state={props.state} price={props.price} availability={props.availability}/>
        </div>
      </Link>
  );
};

export default ProductDiv;


// to="/pdp/:id"


// onClick={e => console.log(props.name, props.id)} to={{
//   pathname: "/pdp/id",
//   id: '2'
// }}>