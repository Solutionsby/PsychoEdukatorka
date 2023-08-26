import "./mainPage.scss";
import { useSelector } from "react-redux";

export const MainPage = () => {
  const isActive = useSelector((state) => state.active);
  console.log(isActive);
  return (
    <div className="main-page-wrapper">
      <div className="main-page-photo">
        <div className="main-page-baloon">
          <p>Zbudujmy razem świat jakiego potrzebujesz</p>
        </div>
        <div
          className={
            isActive.active ? "main-page-surname isOpen" : "main-page-surname"
          }
        >
          <p>Agata Hemmrling-Goc</p>
        </div>
      </div>
    </div>
  );
};
