import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./Components/Navigation/Navigation";
import { MainPage } from "./Components/MainPage/MainPage";

const App = () => (
  <Router>
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Navigation />
    </div>
  </Router>
);

export default App;
