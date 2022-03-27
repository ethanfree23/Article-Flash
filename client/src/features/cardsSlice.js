import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  const response = await fetch("/flash_cards");
  const cards = await response.json();
  return cards;
});

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    cardAdded(state, action) {
      state.entities.push(action.payload);
    },
    cardUpdated(state, action) {
      const { id, word, meaning } = action.payload;
      const existingCard = state.entities.find((card) => card.id === id);
      if (existingCard) {
        existingCard.word = word;
        existingCard.meaning = meaning;
      }
    },
    cardDeleted(state, action) {
      const { id } = action.payload;
      const existingCard = state.entities.find((card) => card.id === id);
      if (existingCard) {
        state.entities = state.entities.filter((card) => card.id !== id);
      }
    },
  },
  extraReducers: {
    [fetchCards.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCards.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchCards.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { cardAdded, cardUpdated, cardDeleted } = cardsSlice.actions;

export default cardsSlice.reducer;
