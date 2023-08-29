import "./navigation.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { toggleActive, isOpen } from "../slicer/isActiveSlicer";
import { useDispatch } from "react-redux";
import { InstagramIcon } from "../../assets/InstagramIcon";

export const Navigation = ({ isActive }) => {
  const dispatch = useDispatch();
  return (
    <div className="navigation-wrapper">
      <div className="navigation-logo" onClick={() => dispatch(isOpen())}>
        <Link to="/"></Link>
      </div>
      <div className="navigation-menu" onClick={() => dispatch(toggleActive())}>
        <div className="menu-div"></div>
        <div className="menu-div"></div>
        <div className="menu-div"></div>
      </div>
      <nav className={isActive ? "active" : ""}>
        <div className="navigation-menu-wrapper">
          <ul>
            <li>
              <Link onClick={() => dispatch(toggleActive())} to="/about">
                Agata Hemmerling-Goc
              </Link>
            </li>
            <li>
              <Link
                onClick={() => dispatch(toggleActive())}
                to="/consultations"
              >
                Konsultacje Psychologiczne
              </Link>
            </li>
            <li>
              <a href="https://www.instagram.com/psycho.edukatorka/">
                <InstagramIcon size={60} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
Navigation.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
