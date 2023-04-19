import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ListItem from "./ListItem";
import { gameType, clearUpdates } from "../../redux/reducers/watching.slice";
import { useAutoAnimate } from "@formkit/auto-animate/react";
type Props = {};

export default function FavoritesLists({}: Props) {
  //Redux
  const watchList = useAppSelector((state) => state.watchList.favoriteList);
  const dispatch = useAppDispatch();
  const [parent, _enableAnimations] = useAutoAnimate(/* optional config */);
  //enableAnimations(true);
  useEffect(() => {
    dispatch(clearUpdates());
  }, []);
  //Render Function
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-semibold text-slate-700 font-sans tracking-tighter my-4">
        Favorites
      </h1>
      <div ref={parent} className="FavoriteListContainer flex flex-col">
        {watchList.map((e, idx) => (
          // <ListItemContainer index={idx}>
          <ListItem key={e.id} {...(e as gameType)} />
          // </ListItemContainer>
        ))}
      </div>
    </div>
  );
}
