import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div>
      <NavigationMenu.Root
        className="NavigationMenuRoot top-36 sticky bg-sky-950 shadow-lg shadow-zinc-400 rounded-lg min-w-min"
        orientation="vertical"
      >
        <NavigationMenu.List className="NavigationMenuList py-2">
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
          <NavigationMenu.Item className="m-8 font-mono text-xl tracking-wide font-semibold text-sky-100 hover:text-orange-500">
            <NavigationMenu.Trigger>Placeholder2</NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item className="m-8 font-mono text-xl tracking-wide font-semibold text-sky-100 hover:text-orange-500">
            <NavigationMenu.Trigger>Placeholder3</NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow"></div>
          </NavigationMenu.Indicator>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}
