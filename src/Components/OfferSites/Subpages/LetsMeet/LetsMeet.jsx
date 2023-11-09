import "./letsMeet.scss";
import { letsMeet } from "../../../../db/contentData.json";

export const LetsMeet = () => {
  console.log(letsMeet);
  return (
    <div className="lets-meet-wrapper">
      {letsMeet.map(({ id, paragraf }) => (
        <p key={id}>{paragraf}</p>
      ))}
    </div>
  );
};
