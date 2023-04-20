import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import AddtoListButton from "./AddtoListButton";

export type Props = {
  thumb: string;
  external: string;
  gameID: number;
  cheapest: number;
  cheapestDealID: string;
};

export default function GameCard({
  cheapest,
  thumb,
  external,
  cheapestDealID,
  gameID,
}: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-neutral-50 w-64 h-min- border-solid border border-slate-300 shadow rounded-md m-2 grow transition-shadow hover:shadow-md max-w-sm  ">
      <div className="w-full flex flex-row flex-wrap">
        <div className="h-36 w-full bg-slate-800 relative justify-center rounded-t-md ">
          <img className="h-36 w-auto rounded-t-md m-auto" src={thumb} />
          <div className="flex flex-col hover:text-white rounded-md absolute z-50 top-0 left-0 w-full h-full text-transparent hover:text-inherit  hover:opacity-90 align-middle justify-center hover:backdrop-blur-lg">
            <AddtoListButton
              external={external}
              cheapestDealID={cheapestDealID}
              gameID={gameID}
              thumb={thumb}
              cheapest={cheapest}
            />
          </div>
        </div>
        <h1 className="font-semibold m-2">{external}</h1>
      </div>
      <div className="flex flex-row">
        <span className="m-3 font-serif tracking-wide text-neutral-700">
          Lowest ${cheapest}
        </span>
        <div className="grow"></div>
        <a
          className="font-mono m-3"
          target="_blank"
          href={`https://www.cheapshark.com/redirect?dealID=${cheapestDealID}`}
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
