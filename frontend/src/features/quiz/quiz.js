import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  results: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addResult(state, action) {
      state.results.push(action.payload);
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const { addResult, clearResults } = quizSlice.actions;
export default quizSlice.reducer;
