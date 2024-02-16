import Nav from './components/Nav';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/" element={<PrivateComponent />}>
            <Route index element={<h1>Product Listing Component</h1>} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<h1>Update Product Component</h1>} />
            <Route path="/profile" element={<h1>Profile Component</h1>} />
            <Route path="/logout" element={<h1>Logout Component</h1>} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;

