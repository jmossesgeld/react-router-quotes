import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading:false, quotes: [{ text: "First quote", author: "first author" }] };

const slice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    addQuote(state, action) {
      state.quotes.push(action.payload)
    },
  },
});

export default slice.reducer;
export const quotesActions = slice.actions;
