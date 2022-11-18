import Category from './components/category/Category';
import { Routes, Route } from 'react-router-dom';
import Header from './components/category/Header/Header';
import Container from './components/category/Container/Container';
import PDP from './PDP';

const App = () => {

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/pdp/id" element={<PDP />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;



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

