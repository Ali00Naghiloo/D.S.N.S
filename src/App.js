import "./App.css";
import "./styles/style.scss";
import Interduction from "./pages/IntroPage";
import PortfolioPage from "./pages/PortfolioPage";
import MyAccount from "./pages/MyAccount";
import Panel from "./pages/PanelPage";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MyAccountNavbar from "./components/my account page/MyAccountNavbar";
import CompanyInformation from "./components/my account page/comany information/CompanyInformation";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Interduction />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/myaccount" element={<MyAccountNavbar />}>
            <Route index element={<MyAccount />} />
            <Route path="coinfo" element={<CompanyInformation />} />
          </Route>
          <Route path="/panel/:name" element={<Panel />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
