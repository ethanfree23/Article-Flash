import { fetchSets } from "./setsSlice";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

export function SetList() {
  const dispatch = useDispatch();

  const { entities } = useSelector((state) => state.sets);
  const loading = useSelector((state) => state.loading);

  // const handleDelete = () => {
  //   dispatch(deleteSet());
  // };

  console.log(entities)


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
            <Link to="/add-set" sets={entities}>
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
                {entities.length &&
                  entities.map(({ id, name }, i) => (
                    <tr key={i}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>
                        {/* <button onClick={() => handleDelete(id)}>Delete</button> */}
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