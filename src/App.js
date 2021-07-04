import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Cart, ProductListing } from './Pages'
import { Nav } from './Components'
function App() {
  return (
    <>

   
<Nav />
      <div className="App">
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<ProductListing />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
