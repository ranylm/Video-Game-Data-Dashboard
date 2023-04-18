import React from "react";
import { useDrop } from "react-dnd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { swapItems } from "../../redux/reducers/watching.slice";

type Props = { children: React.ReactNode; index: number };
export const ItemTypes = {
  LIST_ITEM: "listItem",
};
function swap() {}
export default function ListItemContainer({ children, index }: Props) {
  const dispatch = useAppDispatch();
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.LIST_ITEM,
      drop: (item) => {
        // console.log("index is: ", item);
        // console.log("swapping");
        dispatch(swapItems([item.index, index]));
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    []
  );
  return (
    <div className={`${index} ` + " w-full"} ref={drop}>
      {children}
    </div>
  );
}
