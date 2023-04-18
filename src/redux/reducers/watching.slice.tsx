import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteState {
  favoriteList: gameType[];
  updates: number;
}

export type gameType = {
  gameID: number;
  cheapestDealID: string;
  name: string;
};

const initialState: FavoriteState = {
  favoriteList: [
    { name: "test", gameID: 1, cheapestDealID: "123" },
    { name: "test2", gameID: 2, cheapestDealID: "1234" },
    { name: "test3", gameID: 3, cheapestDealID: "1235" },
  ],
  updates: 0,
};

export const watchListSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<gameType>) => {
      state.favoriteList.push(action.payload);
      state.updates++;
    },
    removeGame: (state, action: PayloadAction<gameType>) => {
      const index = state.favoriteList.findIndex(
        (e) => e.gameID === action.payload.gameID
      );
      if (state.updates > 0) state.updates--;
      if (index !== -1) state.favoriteList.splice(index, 1);
    },
    swapItems: (state, action: PayloadAction<[number, number]>) => {
      let [x, y] = action.payload;
      console.log("indexes", x, y);
      [x, y] = x > y ? [x, y] : [y, x];
      let old = state.favoriteList.splice(x, 1);
      old = state.favoriteList.splice(y, 1, ...old);

      state.favoriteList.splice(x, 0, ...old);
      // console.log("3", state.favoriteList);
    },
    clearUpdates: (state) => {
      state.updates = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGame, removeGame, swapItems, clearUpdates } =
  watchListSlice.actions;

export default watchListSlice.reducer;
