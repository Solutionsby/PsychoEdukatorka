import PropTypes from "prop-types";
import "./subpages.scss";

export const LetsMeet = ({ heading, bouble }) => {
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
          <div className="consultation-option-content"></div>
        </div>
      </div>
    </div>
  );
};
LetsMeet.propTypes = {
  heading: PropTypes.string.isRequired,
  bouble: PropTypes.string.isRequired,
};
