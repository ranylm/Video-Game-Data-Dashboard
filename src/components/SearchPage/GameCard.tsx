import React from "react";

export type Props = {
  thumb: string;
  external: string;
  gameID: number;
  cheapest: number;
};

export default function GameCard({ cheapest, thumb, external }: Props) {
  return (
    <div className="w-52 h-min- border-solid border border-slate-300 shadow rounded-md m-2 grow">
      <div className="w-full flex flex-row flex-wrap">
        <div className="h-36 w-full bg-slate-800 flex justify-center rounded-t-md ">
          <img className="h-36 w-auto rounded-t-md" src={thumb} />
        </div>
        <h1 className="font-semibold p-3">{external}</h1>
      </div>
      <span>Cheapest : {cheapest}</span>
    </div>
  );
}
