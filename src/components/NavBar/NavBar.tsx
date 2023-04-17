import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div>
      <NavigationMenu.Root
        className="sticky bg-white shadow-sm border-solid border-2 border-neutral-200 shadow-zinc-400 rounded-lg w-1/6"
        orientation="horizontal"
      >
        <NavigationMenu.List>
          <NavigationMenu.Item className="p-10">
            <NavigationMenu.Content></NavigationMenu.Content>test
          </NavigationMenu.Item>
          <NavigationMenu.Item className="p-10">
            <NavigationMenu.Content></NavigationMenu.Content>test2
          </NavigationMenu.Item>
          <NavigationMenu.Item className="p-10">
            <NavigationMenu.Content></NavigationMenu.Content>test3
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
}
