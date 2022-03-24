import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: "1", name: "Ethan Freeman", email: "ethanfree23@gmail.com" },
    { id: "2", name: "Sunshine Candy", email: "sunshinecandy666@gmail.com" }
];

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userAdded(state, action) {
            state.push(action.payload)
        },
        userUpdated(state, action) {
            const { id, name, email } = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if (existingUser) {
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        userDeleted(state, action) {
            const { id } = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if (existingUser) {
                return state.filter((user) => user.id !== id);
            }
        },
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { userAdded, userUpdated, userDeleted, login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;