import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './css/Logout.css'
import { logout, selectUser } from './features/userSlice'

function Logout() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logOut = (e) => {
        // e.preventDefault();
        dispatch(logout());
    };

    return (
        <div className="logout">
            <h1>
                Welcome <span className="user__name">{user.name}</span>!
            </h1>
            <button className="logout__btn" onClick={(e) => logOut(e)}>
                Log Out
            </button>
        </div>
    )
}

export default Logout