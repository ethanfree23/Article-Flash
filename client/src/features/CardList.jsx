import { fetchCards, cardDeleted } from "./cardsSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function CardList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.cards);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(cardDeleted({ id }));
  };

console.log(entities)

  return (
    <div className="container">
      <div className="row">
        <h1>Cards List</h1>
      </div>
      <div className="row">
        <div className="two columns">
          <button
            onClick={() => dispatch(fetchCards())}
            className="button-primary"
          >
            Load cards
          </button>
        </div>
        <div className="two columns">
          <Link to="/add-card">
            <button className="button-primary">Add card</button>
          </Link>
        </div>
      </div>
      <div className="row">
        {loading ? (
          "Loading..."
        ) : (
          <table className="u-full-width">
            <thead>
              <tr>
                <th>ID</th>
                <th>Word</th>
                <th>Meaning</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length &&
                entities.map(({ id, word, meaning }, i) => (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{word}</td>
                    <td>{meaning}</td>
                    <td>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-card/${id}`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default CardList;