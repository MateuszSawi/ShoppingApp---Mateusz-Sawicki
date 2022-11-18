import React, { useState, useEffect } from 'react';
import productsData from '../../../data/products';
import Product from './Product/Product';
import styles from './Products.module.scss'

import { useLocation, useParams } from 'react-router-dom'

const Products = props => {
  // const [products]  = useState(productsData);
  // console.log('products:', products);
  // const location = useLocation();
  // const { id } = location.id;

  // const {type} = useParams();
  const location = useLocation();

  const [locationState, setLocationState] = React.useState({id:''});

  React.useEffect(() => {
    console.log('location: ', location.state.from.id);

    setLocationState(location.state.from.id)
  }, []);
  // console.log('products:', type);
  // console.log('products:', stateParamVal);

  console.log('MOJE ID: ', locationState);
  
  return (
    <section className={styles.sectionProducts}>
      
      <div>props.id:{props.id}   | params:   {props.key}</div>
      
      
    </section>
  );
};

export default Products;

 /* {products.map(product => <Product key={product.id} id={product.id} basePrice={product.basePrice}  title={product.title} colors={product.colors} sizes={product.sizes} name={product.name}/>)} */

// return (
//   <section>
//     <Product
//       id={products[0].id}
//       name={products[0].name}
//       title={products[0].title}
//       colors={products[0].colors}
//       sizes={products[0].sizes}
//       basePrice={products[0].basePrice} />
//     <Product
//       id={products[1].id}
//       name={products[1].name}
//       title={products[1].title}
//       colors={products[1].colors}
//       sizes={products[1].sizes}
//       basePrice={products[1].basePrice} />
//   </section>
// )

// {products.map(product => <Product key={product.id} data={product} />)}
// <Product key={products.name} />