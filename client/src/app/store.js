import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import articlesReducer from '../features/userSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        articles: articlesReducer,
    },
});

export default store;