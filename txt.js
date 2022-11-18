import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      <Product
        id={products[0].id}
        name={products[0].name}
        title={products[0].title}
        colors={products[0].colors}
        sizes={products[0].sizes}
        basePrice={products[0].basePrice} />
      <Product
        id={products[1].id}
        name={products[1].name}
        title={products[1].title}
        colors={products[1].colors}
        sizes={products[1].sizes}
        basePrice={products[1].basePrice} />
    </section>
  );
};

export default Products;

//========================================

// Products.js

// const [currentColor, setCurrentColor] = useState(products[0].colors[0]);
  // const [currentSize, setCurrentSize] = useState(products.sizes.name[0]);

  // props.action({products[].colors[]: currentColor});
  // setCurrentColor(products[0].colors[0]);

  // setCurrentSize(products.sizes.name[0]);

  // console.log(currentColor, setCurrentColor, );

  // for(let product of products){
  //   // console.log('product: ', product);

  //   for(let params in product){
  //     // console.log('params: ', params);
  //     console.log('newfff', product[params]); //f
      
  //   }
  // }
  // for(let product of products){
  //   const addProduct = newProduct => {
  //     setProduct([...products, { id: product.id, 
  //       title: newColumn.title, icon: newColumn.icon }]);
  //   };
  // };

//========================================