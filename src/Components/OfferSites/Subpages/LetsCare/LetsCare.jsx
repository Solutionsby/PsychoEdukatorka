import "./letsCare.scss";
import { price } from "../../../../db/contentData.json";

export const LetsCare = () => {
  return (
    <div className="lets-care-wrapper">
      <div className="lets-care-div">
        <h4>Konsultacja psychologiczna, tj. Pierwsze Spotkanie</h4>
        <p>(50 minut) - {price.consultation} zł</p>
      </div>
      <div className="lets-care-div">
        <h4>Terapia indywidualna</h4>
        <p>(50 min) - {price.therapy} zł</p>
      </div>
      <div className="lets-care-div">
        <p>
          DO WSPÓŁPRACY ZAPRASZAMDZIECI POWYŻEJ 7 ROKU ŻYCIA ORAZ
          MŁODZIEŻ.INSTNIEJE MOLIWOŚĆ WSPÓŁPRACY ONLINE
        </p>
      </div>
    </div>
  );
};
