import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { useState } from "react";
import { cardUpdated } from "./cardsSlice";

export function EditCard() {
  const { pathname } = useLocation();
  const cardId = parseInt(pathname.replace("/edit-card/", ""));

  const card = useSelector((state) =>
    state.cards.entities.find((card) => card.id === cardId)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [word, setWord] = useState(card.word);
  const [meaning, setMeaning] = useState(card.meaning);
  const [error, setError] = useState(null);

  const handleWord = (e) => setWord(e.target.value);
  const handleMeaning = (e) => setMeaning(e.target.value);

  const handleClick = () => {
    if (word && meaning) {
      dispatch(
        cardUpdated({
          id: cardId,
          word,
          meaning,
        })
      );

      setError(null);
      navigate("/card-list");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit card</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="wordInput">Word</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="word"
            id="wordInput"
            onChange={handleWord}
            value={word}
          />
          <label htmlFor="meaningInput">Meaning</label>
          <input
            className="u-full-width"
            type="meaning"
            placeholder="meaning"
            id="meaningInput"
            onChange={handleMeaning}
            value={meaning}
          />
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Save card
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditCard;