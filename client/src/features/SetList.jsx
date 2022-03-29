import { fetchSets, setDeleted } from "./setsSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function SetList({ sets }) {
  const dispatch = useDispatch();

  // const { sets } = useSelector((state) => state.sets);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(setDeleted({ id }));
  };

  console.log(sets)


  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Sets</h1>
        </div>
        <div className="row">
          <div className="two columns">
            <button
              onClick={() => dispatch(fetchSets())}
              className="button-primary"
            >
              Load sets
            </button>
          </div>
          <div className="two columns">
            <Link to="/add-set" sets={sets}>
              <button className="button-primary">Add set</button>
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
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sets.length &&
                  sets.map(({ id, name }, i) => (
                    <tr key={i}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                        <Link to={`/edit-set/${id}`}>
                          <button>Edit</button>
                        </Link>
                        <Link to={`/study-set/${id}`}>
                          <button>Study</button>
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}

export default SetList;