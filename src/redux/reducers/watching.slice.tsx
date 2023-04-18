import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteState {
  favoriteList: number[];
}

const initialState: FavoriteState = {
  favoriteList: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<number>) => {
      state.favoriteList.push(action.payload);
    },
    removeGame: (state, action: PayloadAction<number>) => {
      state.favoriteList.filter((e) => e != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGame, removeGame } = counterSlice.actions;

export default counterSlice.reducer;
