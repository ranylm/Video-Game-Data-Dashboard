import React from "react";
import { useDrag } from "react-dnd";

import { gameType } from "../../redux/reducers/watching.slice";

type Props = gameType & { index: number };

export const ItemTypes = {
  LIST_ITEM: "listItem",
};

export default function ListItem({
  name,
  cheapestDealID,
  gameID,
  index,
}: Props) {
  //React DnD Code
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.LIST_ITEM,
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className=" m-2 flex flex-row h-12 w-full bg-white shadow-sm"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    >
      <p className="p-2">{name}__</p>
      {/* <p>{gameID}</p> */}
      <div className="grow"></div>
      <a
        className="p-2 bg-slate-200 rounded-e-md text-gray-700 tracking-wide font-bold"
        target="_blank"
        href={`https://www.cheapshark.com/redirect?dealID=${cheapestDealID}`}
      >
        Buy
      </a>
    </div>
  );
}
