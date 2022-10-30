import "./App.css";
import Interduction from "./pages/IntroPage";
import PortfolioPage from "./pages/PortfolioPage";
import PageThree from "./pages/PageThree";
import Panel from "./pages/PanelPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Interduction />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/pagethree" element={<PageThree />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
