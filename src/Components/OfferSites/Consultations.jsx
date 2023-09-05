import "./consultations.scss";
import { Link } from "react-router-dom";

export const Consultations = () => {
  return (
    <div className="consultation-wrapper">
      <div className="background-image">
        <div className="consultation-ballon">
          <div className="consultation-hello">
            <Link to="/letsMeet">
              <h3>Poznajmy się &#10097;</h3>
            </Link>
          </div>
          <div className="consultation-talk">
            <h3>Porozmawiajmy &#10097;</h3>
          </div>
          <div className="consultation-care">
            <h3>Zaopiekujmy się Tobą &#10097;</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
