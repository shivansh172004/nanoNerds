import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, action) {
      state.items = action.payload || [];
    },
  },
});

export const { setPosts } = postsSlice.actions;
export default postsSlice.reducer;
