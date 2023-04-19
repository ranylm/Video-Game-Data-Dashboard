import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { gameType, swapItems } from "../../redux/reducers/watching.slice";

type Props = gameType;

export const ItemTypes = {
  LIST_ITEM: "listItem",
};

export default function ListItem({ name, cheapestDealID, gameID, id }: Props) {
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
      className=" m-2 flex flex-row h-12 w-full bg-white shadow-sm"
      ref={(el) => {
        drop(el);
        drag(el);
      }}
      style={{
        opacity: isDragging ? 0.6 : 1,
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
