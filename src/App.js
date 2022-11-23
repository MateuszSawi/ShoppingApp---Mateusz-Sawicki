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

  return (
    <>
      <Header currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
      <Container currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} >
        <Routes>
          <Route path="/" element={<Category currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />} />
          <Route exact path="/pdp" element={<PDP />} />
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

