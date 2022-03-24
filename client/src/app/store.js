import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/usersSlice'
import articlesReducer from '../features/usersSlice'

const store = configureStore({
    reducer: {
        user: usersReducer,
        articles: articlesReducer,
    },
});

export default store;