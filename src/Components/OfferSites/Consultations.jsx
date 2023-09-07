import "./consultations.scss";
import { Link } from "react-router-dom";

export const Consultations = () => {
  return (
    <div className="consultation-wrapper">
      <div className="background-image">
        <div className="consultation-ballon">
          <div className="consultation-hello">
            <Link to="/letsMeet">
              <h4>
                Poznajmy się <p>&#10097;</p>
              </h4>
            </Link>
          </div>
          <div className="consultation-talk">
            <h4>
              <Link to="/letsTalk">
                Porozmawiajmy <p>&#10097;</p>
              </Link>
            </h4>
          </div>
          <div className="consultation-care">
            <h4>
              <Link to="/letsCare">
                Zaopiekujmy się Tobą <p>&#10097;</p>
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
