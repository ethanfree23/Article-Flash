import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { useState } from "react";
import { setUpdated } from "./setsSlice";

export function EditSet() {
  const { pathname } = useLocation();
  const setId = parseInt(pathname.replace("/edit-set/", ""));

  const set = useSelector((state) =>
    state.sets.entities.find((set) => set.id === setId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setName] = useState(set.name);
  const [error, setError] = useState(null);

  const handleName = (e) => setName(e.target.value);

  const handleClick = () => {
    if (name) {
      dispatch(
        setUpdated({
          id: setId,
          name,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Edit set</h1>
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
          {error && error}
          <button onClick={handleClick} className="button-primary">
            Save set
          </button>
        </div>
      </div>
    </div>
  );
}