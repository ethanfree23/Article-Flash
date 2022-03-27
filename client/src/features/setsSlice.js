import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSets = createAsyncThunk("sets/fetchSets", async () => {
  const response = await fetch("/flash-sets");
  const set = await response.json();
  return set;
});

const setsSlice = createSlice({
  name: "set",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    setAdded(state, action) {
      state.entities.push(action.payload);
    },
    setUpdated(state, action) {
      const { id, name } = action.payload;
      const existingSet = state.entities.find((set) => set.id === id);
      if (existingSet) {
        existingSet.name = name;
      }
    },
    setDeleted(state, action) {
      const { id } = action.payload;
      const existingSet = state.entities.find((set) => set.id === id);
      if (existingSet) {
        state.entities = state.entities.filter((set) => set.id !== id);
      }
    },
  },
  extraReducers: {
    [fetchSets.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSets.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchSets.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const { setAdded, setUpdated, setDeleted } = setsSlice.actions;

export default setsSlice.reducer;