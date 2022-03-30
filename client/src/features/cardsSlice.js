import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCards = createAsyncThunk(
  "cards/fetchCards",
  async () => {
    return fetch('/flash_cards').then((res) => res.json()).then((data) => data);;
  });

export const deleteCard = createAsyncThunk(
  "cards/deleteCard",
  async (cardId) => {
    fetch(`/flash_cards/${cardId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return cardId;
  }
);

export const createCard = createAsyncThunk(
  "cards/createCard",
  async (newCard) => {
    return fetch(`/flash_cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    }).then((res) => res.json());
  }
);

export const updateCard = createAsyncThunk(
  "cards/updateCard",
  async (updateCard) => {
    return fetch(`/cards/${updateCard['id']}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCard),
    }).then((res) => res.json());
  }
);

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    entities: [],
  },
  reducers: {},
  extraReducers: {
    [fetchCards.fulfilled](state, action) {
      state.entities = action.payload;
    },
    [deleteCard.fulfilled](state, action) {
      state.entities = state.entities.filter(
        (card) => card.id !== action.payload
      );
    },
    [createCard.fulfilled](state, action) {
      state.entities = [...state.entities, action.payload];
    },
    [updateCard.fulfilled](state, action) {
      state.entities = state.entities.filter(
        (card) => card.id !== action.payload['id']
      )
      state.entities = [...state.entities, action.payload];
    },
  },
});

export default cardsSlice.reducer;
