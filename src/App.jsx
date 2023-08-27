import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigation } from "./Components/Navigation/Navigation";
import { MainPage } from "./Components/MainPage/MainPage";
import { About } from "./Components/AbautAgata/About";
import { Consultations } from "./Components/OfferSites/Consultations";

const App = () => {
  const isActive = useSelector((state) => state.active);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage isActive={isActive.active} />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultations" element={<Consultations />} />
      </Routes>
      <Navigation isActive={isActive.active} />
    </Router>
  );
};

export default App;
