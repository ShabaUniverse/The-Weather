import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recents: [],
};

const recentSlice = createSlice({
  name: "recent",
  initialState,
  reducers: {
    setRecents(state, action) {
      const payload = action.payload;

      if (!state.recents.includes(payload)) {
        if (state.recents.length >= 3) {
          state.recents.shift();
          state.recents.push(payload);
        } else {
          state.recents.push(payload);
        }
      }
    },
  },
});

export const recentSelector = (state) => state.recent;
export const { setRecents } = recentSlice.actions;
export default recentSlice.reducer;
