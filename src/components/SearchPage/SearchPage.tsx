import React, { ReactEventHandler, useState } from "react";
import GameCard, { Props as gameprops } from "./GameCard";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setSearchResults } from "../../redux/reducers/searchResult.slice";

type Props = {};

export default function SearchPage({}: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const gameData = useAppSelector(
    (state) => state.searchResults.searchResultsList
  );

  const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      console.log(e.currentTarget.value);
      const response = await fetch(
        `https://www.cheapshark.com/api/1.0/games?title=${e.currentTarget.value}&limit=60&exact=0`
      );
      const data = await response.json();
      console.log(data);
      dispatch(setSearchResults(data));
    }
  };

  return (
    <div className="flex w-5/6 flex-col items-center">
      <h1 className="text-5xl font-semibold text-slate-700 font-sans tracking-tighter">
        Game Search
      </h1>
      <input
        type="text"
        onKeyUp={handleEnter}
        placeholder="What game are your looking for?"
        className="h-8 m-8 w-4/6 rounded-md border border-gray-400 bg-transparent placeholder:-mb-14 placeholder:text-center placeholder:text-neutral-400"
      />
      <div className="container flex flex-row flex-wrap justify-around p-4">
        {gameData.map((e) => {
          return <GameCard {...(e as gameprops)} />;
        })}
      </div>
    </div>
  );
}
