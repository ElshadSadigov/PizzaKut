import Header from './Components/Header/Header'
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Basket from './Components/Basket/Basket';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/basket' element={<Basket/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
