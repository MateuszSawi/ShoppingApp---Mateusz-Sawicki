import Container from './Container/Container';
import Title from './Title/Title';
import Products from './Products/Products';

const Category = props => {
  return (
    <Container >
      <Title />
      <Products cartItems={props.cartItems} setCartItems={props.setCartItems} currentCurrency={props.currentCurrency} currentFilter={props.currentFilter} setCurrentFilter={props.setCurrentFilter} />
    </Container>
  );
};

export default Category;