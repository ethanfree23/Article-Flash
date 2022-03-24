import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function UserList() {
    const users = useSelector((state) => state.users);

    return (
        <tbody>
            {users.map(({ id, name, email }, i) => (
                <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                        <button>Delete</button>
                        <Link to={`/edit-user/${id}`}>
                            <button>Edit</button>
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
    )
};