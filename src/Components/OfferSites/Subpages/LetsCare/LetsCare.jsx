import "./letsCare.scss";
import { price } from "../../../../db/contentData.json";

export const LetsCare = () => {
  return (
    <div className="lets-care-wrapper">
      <div className="consultation-lets-care">
        <h2>Konsultacja psychologiczna, tj. Pierwsze Spotkanie</h2>
        <p>(50 minut) - {price.consultation} zł</p>
      </div>
      <div className="therapy-lets-care">
        <h2>Terapia Indywidualna</h2>
        <p>(50 min) - {price.therapy} zł</p>
      </div>
    </div>
  );
};
