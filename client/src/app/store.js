import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from '../features/cardsSlice'
import articlesReducer from '../features/usersSlice'

const store = configureStore({
    reducer: {
        cards: cardsReducer,
        articles: articlesReducer,
    },
});

export default store;