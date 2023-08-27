import "./mainPage.scss";
import PropTypes from "prop-types";

export const MainPage = ({ isActive }) => {
  return (
    <div className="main-page-wrapper">
      <div className="main-page-photo">
        <div className="main-page-baloon">
          <p>Zbudujmy razem świat jakiego potrzebujesz</p>
        </div>
        <div
          className={
            isActive ? "main-page-surname isOpen" : "main-page-surname"
          }
        >
          <p>Agata Hemmrling-Goc</p>
        </div>
      </div>
    </div>
  );
};
MainPage.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
