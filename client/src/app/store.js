import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from '../features/cardsSlice'
import articlesReducer from '../features/userSlice'
import userReducer from "../features/userSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        cards: cardsReducer,
        articles: articlesReducer,
    },
});

export default store;