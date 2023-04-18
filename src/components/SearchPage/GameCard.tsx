import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import AddtoListButton from "./addtoListButton";

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
    <div className="bg-neutral-50 w-52 h-min- border-solid border border-slate-300 shadow rounded-md m-2 grow transition-shadow hover:shadow-md">
      <div className="w-full flex flex-row flex-wrap">
        <div className="h-36 w-full bg-slate-800 relative justify-center rounded-t-md ">
          <img className="h-36 w-auto rounded-t-md m-auto" src={thumb} />
          <div className="hover:text-white rounded-md absolute z-50 top-0 left-0 w-full h-full text-transparent hover:text-inherit hover:bg-orange-700 hover:opacity-90">
            <AddtoListButton
              external={external}
              cheapestDealID={cheapestDealID}
              gameID={gameID}
            />
          </div>
        </div>
        <h1 className="font-semibold m-2">{external}</h1>
      </div>
      <span className="m-3">Lowest : ${cheapest}</span>
      <a href={`https://www.cheapshark.com/redirect?dealID=${cheapestDealID}`}>
        Buy placeholder
      </a>
    </div>
  );
}
