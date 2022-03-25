import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { cardAdded } from "./cardsSlice";

export function AddCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const [error, setError] = useState(null);

  const handleWord = (e) => setWord(e.target.value);
  const handleMeaning = (e) => setMeaning(e.target.value);

  const cardsAmount = useSelector((state) => state.cards.entities.length);

  const handleClick = () => {
    if (word && meaning) {
      dispatch(
        cardAdded({
          id: cardsAmount + 1,
          word,
          meaning,
        })
      );

      setError(null);
      navigate("/card-list");
    } else {
      setError("Fill in all fields");
    }

    setWord("");
    setMeaning("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add card</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="wordInput">  Word  </label>
          <input
            className="u-full-width"
            type="text"
            placeholder="word"
            id="wordInput"
            onChange={handleWord}
            value={word}
          />
          <label htmlFor="meaningInput">  Meaning  </label>
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
            Add card
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCard;