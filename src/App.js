import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './Pages/Books/Books';
import Categories from './Pages/Categories/Categories';
import './App.css';

function App() {
  return (
    <div className="AppContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
