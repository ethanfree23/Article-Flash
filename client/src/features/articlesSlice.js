import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk(
    "articles/fetchArticles",
    async () => {
        return fetch("/articles")
            .then((res) => res.json());
    }
);

const articlesSlice = createSlice({
    name: "articles",
    initialState: {
        // entities: [],
    },
    reducers: {},
    extraReducers: {
        [fetchArticles.fulfilled](state, action) {
            state = action.payload;
        },
    },
});

// export const selectArticle = (state) => state.article.article

export default articlesSlice.reducer;