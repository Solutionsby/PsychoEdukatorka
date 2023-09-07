import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { consutlation } from "./db/contentData.json";
import { Navigation } from "./Components/Navigation/Navigation";
import { MainPage } from "./Components/MainPage/MainPage";
import { About } from "./Components/AbautAgata/About";
import { Consultations } from "./Components/OfferSites/Consultations";
import { ConsultationOption } from "./Components/OfferSites/Subpages/ConsultationOption";

const App = () => {
  const isActive = useSelector((state) => state.active);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage isActive={isActive.active} />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultations" element={<Consultations />} />
        <Route
          path="/letsMeet"
          element={
            <ConsultationOption
              heading={consutlation[0].heading}
              bouble={consutlation[0].bouble}
              pageToShow="pageLetsMeet"
            />
          }
        />
        <Route
          path="/letsTalk"
          element={
            <ConsultationOption
              heading={consutlation[0].heading}
              bouble={consutlation[1].bouble}
              pageToShow="pageLetsTalk"
            />
          }
        />
        <Route
          path="/letsCare"
          element={
            <ConsultationOption
              heading={consutlation[0].heading}
              bouble={consutlation[2].bouble}
              pageToShow="pageLetsCare"
            />
          }
        />
      </Routes>
      <Navigation isActive={isActive.active} />
    </Router>
  );
};

export default App;
