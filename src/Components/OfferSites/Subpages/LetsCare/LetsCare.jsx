import "./letsCare.scss";
import { letsCare } from "../../../../db/contentData.json";

export const LetsCare = () => {
  return (
    <div className="lets-care-wrapper">
      <div className="lets-care-div">
        <h4>{letsCare[0].header}</h4>
        <p>
          ({letsCare[0].time}) - {letsCare[0].price} zł
        </p>
      </div>
      <div className="lets-care-div">
        <h4>{letsCare[1].header}</h4>
        <p>
          ({letsCare[1].time}) - {letsCare[1].price} zł
        </p>
      </div>
      <div className="lets-care-div">
        <p>
          <h4>{letsCare[2].pararafText}</h4>
          <h4>{letsCare[3].pararafText}</h4>
        </p>
      </div>
    </div>
  );
};
