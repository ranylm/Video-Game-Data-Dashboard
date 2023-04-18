import React, { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

type Props = {};

export default function NavBar({}: Props) {
  const [listUpdates, setListUpdate] = useState(0);
  const updates = useAppSelector((state) => state.watchList.updates);

  useEffect(() => {
    setListUpdate(updates);
  }, [updates]);

  return (
    <div>
      <NavigationMenu.Root
        className="NavigationMenuRoot top-36 sticky bg-sky-950 shadow-lg shadow-zinc-400 rounded-lg min-w-min"
        orientation="vertical"
      >
        <NavigationMenu.List className="NavigationMenuList py-2 text-center">
          <Link to="/">
            <NavigationMenu.Item className="m-8 font-mono text-xl tracking-wide font-semibold text-sky-100 hover:text-orange-500">
              <NavigationMenu.Trigger>Dashboard</NavigationMenu.Trigger>
            </NavigationMenu.Item>
          </Link>
          <Link to="/search">
            <NavigationMenu.Item className="m-8 font-mono text-xl tracking-wide font-semibold text-sky-100 hover:text-orange-500">
              <NavigationMenu.Trigger>Search</NavigationMenu.Trigger>
            </NavigationMenu.Item>
          </Link>
          <Link to="/lists">
            <NavigationMenu.Item className="m-8 font-mono text-xl tracking-wide font-semibold text-sky-100 hover:text-orange-500">
              <NavigationMenu.Trigger>
                {" "}
                {listUpdates ? (
                  <div className="relative float-right top-0 right-0 flex h-5 w-5 bg-orange-500 rounded-full justify-around">
                    <span className="-my-1 text-base font-mono text-slate-50 font-bold">
                      {listUpdates}
                    </span>
                  </div>
                ) : undefined}
                List
              </NavigationMenu.Trigger>
            </NavigationMenu.Item>
          </Link>
          <NavigationMenu.Item className="m-8 font-mono text-xl tracking-wide font-semibold text-sky-100 hover:text-orange-500">
            <NavigationMenu.Trigger>Placeholder3</NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="m-8 font-mono text-xl tracking-wide font-semibold text-sky-100 hover:text-orange-500">
            <NavigationMenu.Trigger>Placeholder 4</NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="m-8 font-mono text-xl tracking-wide font-semibold text-sky-100 hover:text-orange-500">
            <NavigationMenu.Trigger>Placeholder 5</NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow"></div>
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}
