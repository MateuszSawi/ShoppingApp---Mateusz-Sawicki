import Category from './components/category/Category';
import { Routes, Route } from 'react-router-dom';
import Header from './components/category/Header/Header';
import Container from './components/category/Container/Container';
import PDP from './PDP';
import { useState} from 'react';
import productsData from './data/products';

const App = () => {

  const [currentFilter, setCurrentFilter] = useState('ALL');
  const [currentCurrency, setCurrentCurrency] = useState('$');
  const [cartItems, setCartItems] = useState([]);
  const [finalCart, setFinalCart] = useState([]);
  // const [currentColor, setCurrentColor] = useState('');
  // const [currentSize, setCurrentSize] = useState('');
  
  return (
    <>
      <Header finalCart={finalCart} setFinalCart={setFinalCart} cartItems={cartItems} setCartItems={setCartItems} currentCurrency={currentCurrency} setCurrentCurrency={setCurrentCurrency} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter}/>
      <Container>
        <Routes>
          <Route path="/" element={<Category cartItems={cartItems} setCartItems={setCartItems} currentCurrency={currentCurrency} currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />} />
          <Route exact path="/pdp" element={<PDP currentCurrency={currentCurrency} />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;

// currentColor={currentColor} setCurrentColor={setCurrentColor} currentSize={currentSize} setCurrentSize={setCurrentSize} 

// import Container from './components/category/Container/Container';
// import Header from './components/category/Header/Header';
// import Title from './components/category/Title/Title';
// import Products from './components/category/Products/Products';

// const App = () => {

//   return (
//     <Container>
//       <Header />
//       <Title />
//       <Products />
//     </Container>
    
//   );
// };

// export default App;

