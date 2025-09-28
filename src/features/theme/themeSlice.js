// features/themes.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  primaryColor: 'blue',
  fontSize: 'medium'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    }
  }
});

export const { toggleDarkMode, setPrimaryColor, setFontSize } = themeSlice.actions;
export default themeSlice.reducer;