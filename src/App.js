import { Route, Routes } from "react-router-dom";
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from "./components/NotFound/NotFound";
import Products from './components/Products/Products';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </div>
  );
}

export default App;
