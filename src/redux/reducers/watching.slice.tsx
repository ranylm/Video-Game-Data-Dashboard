import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteState {
  favoriteList: game[];
}

type game = {
  gameID: number;
  cheapestDealID: string;
  name: string;
};

const initialState: FavoriteState = {
  favoriteList: [],
};

export const watchListSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<game>) => {
      state.favoriteList.push(action.payload);
    },
    removeGame: (state, action: PayloadAction<game>) => {
      state.favoriteList.filter((e) => e != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGame, removeGame } = watchListSlice.actions;

export default watchListSlice.reducer;
