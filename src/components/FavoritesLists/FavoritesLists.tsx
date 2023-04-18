import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

type Props = {};

export default function FavoritesLists({}: Props) {
  const watchList = useAppSelector((state) => state.watchList.favoriteList);
  return (
    <div>
      {watchList.map((e) => (
        <p>{e.name}</p>
      ))}
    </div>
  );
}
