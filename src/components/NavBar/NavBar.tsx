import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "react-router-dom";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div>
      <NavigationMenu.Root
        className="top-36 sticky bg-white shadow-md border-solid border-2 border-neutral-200 shadow-zinc-200 rounded-lg min-w-min"
        orientation="horizontal"
      >
        <NavigationMenu.List>
          <Link to="/">
            <NavigationMenu.Item className="p-10">
              Placeholder thing
            </NavigationMenu.Item>
          </Link>
          <Link to="/search">
            <NavigationMenu.Item className="p-10">Search</NavigationMenu.Item>
          </Link>
          <NavigationMenu.Item className="p-10">
            Placeholder2
          </NavigationMenu.Item>
          <NavigationMenu.Item className="p-10">
            Placeholder3
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}
