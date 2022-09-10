import './App.css';
import Interduction from "./components/Interduction";
import Portfolio from "./components/Portfolio";
import PageThree from "./components/PageThree";
import Panel from "./components/Panel";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Interduction />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/pagethree' element={<PageThree />} />
        <Route path='/panel' element={<Panel />} />
      </Routes>
    </div>
  );
}

export default App;
