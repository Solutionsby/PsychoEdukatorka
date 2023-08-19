import { useState } from "react";
import "./navigation.scss";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <div className="navigation-wrapper">
      <div className="navigation-logo">
        <a href="#"></a>
      </div>
      <div className="navigation-menu" onClick={handleMenuToggle}>
        <div className="menu-div"></div>
        <div className="menu-div"></div>
        <div className="menu-div"></div>
      </div>
      <nav className={isOpen ? "active" : ""}></nav>
    </div>
  );
};
