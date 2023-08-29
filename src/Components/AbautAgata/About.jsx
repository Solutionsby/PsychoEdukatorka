import { Slider } from "../Slider/Slider";
import { slides } from "../../db/contentData.json";
import "./about.scss";

export const About = () => {
  console.log();
  return (
    <div className="about-wrapper">
      <div className="about-border">
        <div className="about-heading">
          <div className="about-agata-image"></div>
          <h2>AGATA HEMMERLING-GOC</h2>
        </div>
        <div className="about-slider-wrapper">
          <Slider slides={slides} />
        </div>
      </div>
    </div>
  );
};
