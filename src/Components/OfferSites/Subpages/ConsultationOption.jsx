import "./subpages.scss";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { LetsMeet } from "./LetsMeet/LetsMeet";
import { LetsTalk } from "./LetsTalk/LetsTalk";
import { LetsCare } from "./LetsCare/LetsCare";

export const ConsultationOption = ({ bouble, pageToShow }) => {
  const location = useLocation();
  const componentToShow = pageToShow;
  const aviableComponents = [
    { id: "pageLetsMeet", component: <LetsMeet /> },
    { id: "pageLetsTalk", component: <LetsTalk /> },
    { id: "pageLetsCare", component: <LetsCare /> },
  ];
  const options = [
    { from: "/letsMeet", LeftTo: "/consultations", rightTo: "/letsTalk" },
    { from: "/letsCare", LeftTo: "/letsTalk", rightTo: "/consultations" },
    { from: "/letsTalk", LeftTo: "/letsMeet", rightTo: "/letsCare" },
  ];

  const selected = (array, arrayComponent, comparison) => {
    return array.find((item) => item[arrayComponent] === comparison);
  };

  const selectedOption = selected(options, "from", location.pathname);
  const selectedComponent = selected(aviableComponents, "id", componentToShow);

  // // const selectedComponent = aviableComponents.find(
  // //   (item) => item.id === componentToShow
  // );
  return (
    <div className="consultation-option-wrapper">
      <div className="consultation-option-border">
        <div className="consultation-option-header">
          <div className="consultation-option-image">
            <div className="consultation-option-bouble">
              <p>{bouble}</p>
            </div>
          </div>
          <h3>KONSULTACJE PSYCHOLOGICZNE</h3>
        </div>
        <div className="consultation-option-content-wrapper">
          <div className="consultation-option-content">
            {selectedComponent && selectedComponent.component}
            <div className="consultation-arrow">
              <Link to="/consultations">&#10096;</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="consultation-option-desktop">
        <div className="consultation-wrapper-content-desktop">
          {selectedComponent && selectedComponent.component}
        </div>
      </div>
      <div className="consultation-option-bouble-desktop">
        {selectedOption && (
          <>
            <Link
              className="arrow-in-bouble-desktop-left"
              to={selectedOption.LeftTo}
            >
              &#10096;
            </Link>
            <p>{bouble}</p>
            <Link
              className="arrow-in-bouble-desktop-right"
              to={selectedOption.rightTo}
            >
              &#10097;
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
ConsultationOption.propTypes = {
  bouble: PropTypes.string.isRequired,
  pageToShow: PropTypes.string.isRequired,
};
