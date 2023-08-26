import "./navigation.scss";
import { toggleActive } from "../slicer/isActiveSlicer";
import { useSelector, useDispatch } from "react-redux";

export const Navigation = () => {
  const isActive = useSelector((state) => state.active);
  const dispatch = useDispatch();

  return (
    <div className="navigation-wrapper">
      <div className="navigation-logo">
        <a href="#"></a>
      </div>
      <div className="navigation-menu" onClick={() => dispatch(toggleActive())}>
        <div className="menu-div"></div>
        <div className="menu-div"></div>
        <div className="menu-div"></div>
      </div>
      <nav className={isActive.active ? "active" : ""}>
        <div className="navigation-menu-wrapper"></div>
      </nav>
    </div>
  );
};
