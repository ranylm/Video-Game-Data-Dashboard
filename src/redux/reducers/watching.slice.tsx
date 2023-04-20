import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavoriteState {
  favoriteList: gameType[];
  updates: number;
  idAssigner: number;
}

export type gameType = {
  id: number;
  gameID: number;
  cheapestDealID: string;
  name: string;
  thumb: string;
};

type inputGameType = Omit<gameType, "id">;
const initialState: FavoriteState = {
  favoriteList: [
    // { id: 0, name: "test", gameID: 1235, cheapestDealID: "1" },
    // { id: 1, name: "test2", gameID: 24576, cheapestDealID: "2" },
    // { id: 2, name: "test3", gameID: 3867, cheapestDealID: "3" },
  ],
  updates: 0,
  idAssigner: 0,
};

export const watchListSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addGame: (state, action: PayloadAction<inputGameType>) => {
      state.favoriteList.push({ ...action.payload, id: state.idAssigner });
      state.updates++;
      state.idAssigner++;
    },
    removeGame: (state, action: PayloadAction<inputGameType>) => {
      const index = state.favoriteList.findIndex(
        (e) => e.gameID === action.payload.gameID
      );
      if (state.updates > 0) state.updates--;
      if (index !== -1) state.favoriteList.splice(index, 1);
    },
    swapItems: (state, action: PayloadAction<[number, number]>) => {
      //let [x, y] = action.payload;

      let x = state.favoriteList.findIndex((e) => action.payload[0] === e.id);
      let y = state.favoriteList.findIndex((e) => action.payload[1] === e.id);
      console.log("indexes", x, y);
      [x, y] = x > y ? [x, y] : [y, x];
      let old = { ...state.favoriteList[x] };
      state.favoriteList[x] = {
        ...state.favoriteList[y],
      };
      state.favoriteList[y] = { ...old };
      //IMMER IS A LIE
      // let old = state.favoriteList.splice(x, 1);
      // old = state.favoriteList.splice(y, 1, ...old);
      // state.favoriteList.splice(x, 0, ...old);
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
