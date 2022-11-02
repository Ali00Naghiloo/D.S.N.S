import "./App.css";
import Interduction from "./pages/IntroPage";
import PortfolioPage from "./pages/PortfolioPage";
import MyAccount from "./pages/MyAccount";
import PageThree from "./components/PageThree";
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
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
