import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setAdded } from "./setsSlice";

export function AddSet({ sets, onAddSet }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);

  const setsAmount = useSelector((state) => state.sets.entities.length);

  const handleClick = () => {
    if (name) {
      dispatch(
        setAdded({
          id: setsAmount + 1,
          name,
        })
      );

      setError(null);
      navigate("/dashboard");
    } else {
      setError("Fill in all fields");
    }

    setName("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add set</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label htmlFor="nameInput">Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="nameInput"
            onChange={handleName}
            value={name}
          />
          {error}
          <button onClick={handleClick} className="button-primary">
            Add set
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddSet;