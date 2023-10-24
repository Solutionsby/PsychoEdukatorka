import "./letsTalk.scss";

export const LetsTalk = () => {
  return (
    <div className="lets-talk-wrapper">
      <div className="telephone lets-talk-div">
        <h4>telefon:</h4>
        <a href="tel:+48 519 785 884">519 785 884</a>
      </div>
      <div className="mail lets-talk-div">
        <h4>mail:</h4>
        <a href="mailto:agata@psycho-edukatorka.pl">
          agata@psycho-edukatorka.pl
        </a>
      </div>
      <div className="adress lets-talk-div">
        <h4>adres gabinetu:</h4>
        <a href="https://goo.gl/maps/g2QJKueWY3ugzkca7">
          Psycho Academy <br />
          Okrąg 21/23/3, 80-871 Gdańśk
        </a>
      </div>
    </div>
  );
};
