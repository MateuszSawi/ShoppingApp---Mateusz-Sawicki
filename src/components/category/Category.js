import Container from './Container/Container';
import Header from './Header/Header';
import Title from './Title/Title';
import Products from './Products/Products';

const Category = props => {
//  console.log(props);
  return (
    <Container>
      {/* <Header /> */}
      <Title />
      <Products cartItems={props.cartItems} setCartItems={props.setCartItems} currentCurrency={props.currentCurrency} currentFilter={props.currentFilter} setCurrentFilter={props.setCurrentFilter} />
    </Container>
    
  );
};

export default Category;

