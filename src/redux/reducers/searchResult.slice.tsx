import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteState {
  searchResultsList: [];
}

const initialState: FavoriteState = {
  searchResultsList: [],
};

export const searchResultsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResultsList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchResults } = searchResultsSlice.actions;

export default searchResultsSlice.reducer;
