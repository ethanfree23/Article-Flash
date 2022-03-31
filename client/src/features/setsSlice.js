import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchSets = createAsyncThunk(
//   "sets/fetchSet",
//   async () => {
//     return fetch('/flash_sets').then((res) => res.json()).then((data) => data);
//   }
// );

export const fetchSets = createAsyncThunk(
  "sets/fetchSets",
  async () => {
    return fetch("/flash_sets")
    .then((res) => res.json());
  }
);

export const deleteSet = createAsyncThunk(
  "sets/deleteSet",
  async (setId) => {
    fetch(`/flash_sets/${setId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return setId;
  }
);

export const createSet = createAsyncThunk(
  "sets/createSet",
  async (newSet) => {
    return fetch(`/flash_sets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSet),
    }).then((res) => res.json());
  }
);

export const updateSet = createAsyncThunk(
  "sets/updateSet",
  async (updateSet) => {
    return fetch(`/flash_sets/${updateSet['id']}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateSet),
    }).then((res) => res.json());
  }
);

const setsSlice = createSlice({
  name: "sets",
  initialState: {
    entities: [],
  },
  reducers: {},
  extraReducers: {
    [fetchSets.fulfilled](state, action) {
      state.entities = action.payload;
    },
    [deleteSet.fulfilled](state, action) {
      state.entities = state.entities.filter(
        (set) => set.id !== action.payload
      );
    },
    [createSet.fulfilled](state, action) {
      state.entities = [...state.entities, action.payload];
    },
    [updateSet.fulfilled](state, action) {
      state.entities = state.entities.filter(
        (set) => set.id !== action.payload['id']
      )
      state.entities = [...state.entities, action.payload];
    },
  },
});

export default setsSlice.reducer;