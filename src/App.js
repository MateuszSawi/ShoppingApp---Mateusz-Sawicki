import Header from './components/Header/Header';
import Container from './components/category/Container/Container';
import Category from './components/category/Category';
import PDP from './components/PDP/PDP';
import CartContainer from './components/cartbag/CartContainer';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [currentFilter, setCurrentFilter] = useState('ALL');
  const [currentCurrency, setCurrentCurrency] = useState('$');
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <Header 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
        currentCurrency={currentCurrency} 
        setCurrentCurrency={setCurrentCurrency} 
        currentFilter={currentFilter} 
        setCurrentFilter={setCurrentFilter}/>
      <Container>
        <Routes>
          <Route path="/" 
            element={<Category 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
              currentCurrency={currentCurrency} 
              currentFilter={currentFilter} 
              setCurrentFilter={setCurrentFilter} />} />
          <Route exact path="/pdp" 
            element={<PDP 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
              currentCurrency={currentCurrency} />} />
          <Route exact path="/cartbag" 
            element={<CartContainer 
              cartItems={cartItems} 
              setCartItems={setCartItems} 
              currentCurrency={currentCurrency} />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;