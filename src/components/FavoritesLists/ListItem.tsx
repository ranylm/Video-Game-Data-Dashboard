import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  gameType,
  swapItems,
  removeGame,
} from "../../redux/reducers/watching.slice";

type Props = gameType;

export const ItemTypes = {
  LIST_ITEM: "listItem",
};

export default function ListItem({
  name,
  cheapestDealID,
  gameID,
  id,
  thumb,
}: Props) {
  //React DnD Code
  const dispatch = useAppDispatch();

  useEffect(() => console.log("did rerender"));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.LIST_ITEM,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.LIST_ITEM,
      drop: (item: { id: number }) => {
        // console.log("index is: ", item);
        // console.log("swapping");
        dispatch(swapItems([item.id, id]));
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <div
      className="w-72 m-2 p-2   flex flex-col align-middle justify-center bg-white shadow-sm overflow-hidden max-w-sm grow rounded-lg"
      ref={(el) => {
        drop(el);
        drag(el);
      }}
      style={{
        opacity: isDragging ? 0.6 : 1,
        cursor: "move",
      }}
    >
      <div className="w-full">
        <img src={thumb} className="h-20 w-36 mx-auto" />
      </div>
      <p className="p-2 mx-auto font-serif tracking-wide font-semibold">
        {name}
      </p>
      {/* <p>{gameID}</p> */}
      <div className="grow"></div>
      <div className="flex flex-row">
        <a
          className="p-2 bg-slate-200 rounded-e-md text-gray-700 tracking-wide font-bold"
          target="_blank"
          href={`https://www.cheapshark.com/redirect?dealID=${cheapestDealID}`}
        >
          Buy
        </a>
        <div className="grow"></div>
        <button
          className="rounded-l-md p-2 bg-slate-200 text-gray-700 tracking-wide font-bold"
          onClick={() => {
            dispatch(
              removeGame({
                name: name,
                cheapestDealID: cheapestDealID,
                gameID: gameID,
                thumb: thumb,
              })
            );
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
