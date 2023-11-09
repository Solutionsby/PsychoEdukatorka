import "./letsTalk.scss";
import { letsTalk } from "../../../../db/contentData.json";

export const LetsTalk = () => {
  return (
    <div className="lets-talk-wrapper">
      <div className="telephone lets-talk-div">
        <h4>{letsTalk.telephon}</h4>
        <a href={`tel:+48${letsTalk.telephoneNumber}`}>
          {letsTalk.telephoneNumber}
        </a>
      </div>
      <div className="mail lets-talk-div">
        <h4>{letsTalk.eMail}</h4>
        <a href={`mailto:${letsTalk.eMailAdress}`}>{letsTalk.eMailAdress}</a>
      </div>
      <div className="adress lets-talk-div">
        <h4>{letsTalk.adress}</h4>
        <a href={letsTalk.adresLink}>
          {letsTalk.adresOne}
          <br />
          {letsTalk.adresTwo}
        </a>
      </div>
    </div>
  );
};
