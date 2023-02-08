import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Character.css";

export function Characters() {
  const dispatch = useDispatch();
  const randomCharacter = useSelector((state) => state.randomCharacter);
  const characters = useSelector((state) => state.characters);
  const [visable, setVisable] = useState(9);

  const showMoreItems = () => {
    setVisable((prevValue) => prevValue + 3);
  };

  const uploadCharacters = async () => {
    const res = await fetch(
      "https://gateway.marvel.com:443/v1/public/characters?apikey=7c7b8997f6461647a09e0978d453b689&hash=9026bc80debd540c0bdbddc32ec385d7&ts=1&limit=99"
    );
    const json = await res.json();
    console.log(json);
    dispatch({
      type: "upload/characters",
      payload: json.data.results,
    });
  };

  const tryIt = () => {
    dispatch({
      type: "random/character",
    });
  };

  useEffect(() => {
    uploadCharacters();
  }, []);

  return (
    <>
      <div className="herous">
        <div className="random-herous">
          <div className="left-side">
            <div className="block-in-block">
              <div className="random">
                <img
                  className="foto-herous"
                  src={`${randomCharacter.thumbnail?.path}.${randomCharacter.thumbnail?.extension}`}
                />
              </div>
              <div className="about-herous">
                <h2 className="hero-name">{randomCharacter.name}</h2>
                <p className="herous-p">{randomCharacter.description}</p>
                <button className="homepage">Homepage</button>
                <button className="wiki">WiKi</button>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="right-block">
              <p className="p1">
                Random character for today!<br></br>
                Do you want to get to know him better?
              </p>
              <p className="p2">Or choose another one</p>
              <button className="tryit" onClick={tryIt}>
                Try it
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="card-block">
        {characters.map(
          (item, index) =>
            index < visable && (
              <div className="herous-card">
                <img
                  className="cards-herous"
                  src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
                />

                <p className="name-herou">{item.name}</p>
              </div>
            )
        )}
      </div>
      <button onClick={showMoreItems}>Show More</button>
    </>
  );
}
