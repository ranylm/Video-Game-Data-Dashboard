import React from "react";

export type Props = {
  thumb: string;
  external: string;
  gameID: number;
  cheapest: number;
};

export default function GameCard({ cheapest, thumb, external }: Props) {
  return (
    <div className="bg-neutral-50 w-52 h-min- border-solid border border-slate-300 shadow rounded-md m-2 grow">
      <div className="w-full flex flex-row flex-wrap">
        <div className="h-36 w-full bg-slate-800 relative justify-center rounded-t-md ">
          <img className="h-36 w-auto rounded-t-md" src={thumb} />
          <div className="hover:text-white rounded-md absolute z-50 top-0 left-0 w-full h-full text-transparent hover:text-inherit hover:bg-orange-700 hover:opacity-90">
            add to list / remove?
          </div>
        </div>
        <h1 className="font-semibold m-2">{external}</h1>
      </div>
      <span className="m-3">Lowest : ${cheapest}</span>
    </div>
  );
}
