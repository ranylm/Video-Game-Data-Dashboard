import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addGame, removeGame } from "../../redux/reducers/watching.slice";
import * as Toast from "@radix-ui/react-toast";

type Props = {
  thumb: string;
  external: string;
  gameID: number;
  cheapest: number;
  cheapestDealID: string;
};

export default function AddtoListButton({
  external,
  cheapestDealID,
  gameID,
  thumb,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        className="Button large violet m-auto text-2xl tracking-wide cursor-pointer"
        onClick={() => {
          dispatch(
            addGame({
              name: external,
              cheapestDealID: cheapestDealID,
              gameID: gameID,
              thumb: thumb,
            })
          );
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Add to Favorites List
      </button>

      <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Toast.Title className="ToastTitle">{`${external}`}</Toast.Title>
        <Toast.Description asChild>
          <p className="ToastDescription">has been added to Favorites</p>
        </Toast.Description>
        <Toast.Action
          className="ToastAction"
          asChild
          altText="Goto schedule to undo"
        >
          <button
            className=""
            onClick={() => {
              dispatch(
                removeGame({
                  name: external,
                  cheapestDealID: cheapestDealID,
                  gameID: gameID,
                  thumb: thumb,
                })
              );
            }}
          >
            Undo
          </button>
        </Toast.Action>
      </Toast.Root>
    </>
  );
}
