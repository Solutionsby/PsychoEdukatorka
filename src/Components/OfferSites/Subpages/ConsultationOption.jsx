import "./subpages.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LetsMeet } from "./LetsMeet/LetsMeet";
import { LetsTalk } from "./LetsTalk/LetsTalk";

export const ConsultationOption = ({ heading, bouble, pageToShow }) => {
  const aviableComponents = [
    { id: "pageLetsMeet", component: <LetsMeet /> },
    { id: "pageLetsTalk", component: <LetsTalk /> },
  ];

  const componentToShow = pageToShow;
  const selectedComponent = aviableComponents.find(
    (item) => item.id === componentToShow
  );

  return (
    <div className="consultation-option-wrapper">
      <div className="consultation-option-border">
        <div className="consultation-option-header">
          <div className="consultation-option-image">
            <div className="consultation-option-bouble">
              <p>{bouble}</p>
            </div>
          </div>
          <h3>{heading}</h3>
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
    </div>
  );
};
ConsultationOption.propTypes = {
  heading: PropTypes.string.isRequired,
  bouble: PropTypes.string.isRequired,
  pageToShow: PropTypes.string.isRequired,
};
