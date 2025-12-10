import * as React from "react";
import { Link } from "react-router-dom";
import { aboutList, solutionsList, downloadList } from "@/data/Data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavMenu() {
  return (
    <NavigationMenu className="mx-auto hidden lg:block">
      <NavigationMenuList className="flex-wrap text-white">
        {/* HOME */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-[17px] bg-transparent hover:text-primary-red! hover:bg-transparent!"
          >
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* ABOUT */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[17px] bg-transparent hover:text-primary-red! hover:bg-transparent!">
            About
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px]">
              {aboutList.map((about) => {
                return (
                  <li key={about.id}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={about.href}
                        className="flex-row items-center gap-2"
                      >
                        {about.title}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Solutions */}

        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[17px] bg-transparent hover:text-primary-red! hover:bg-transparent!">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-4 w-[1000px] gap-4 p-4">
              {solutionsList.map((solution) => {
                return (
                  <li key={solution.id}>
                    <h1 className="font-bold text-[17px]">{solution.title}</h1>
                    <ul className="grid w-[250px]">
                      {solution.subTitle.map((sub) => {
                        return (
                          <li key={sub.id}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={sub.href}
                                className="flex-row items-center gap-2"
                              >
                                {sub.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Downloads */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[17px] bg-transparent hover:text-primary-red! hover:bg-transparent!">
            Downloads
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[250px]">
              {downloadList.map((download) => {
                return (
                  <li key={download.id}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={download.href}
                        className="flex-row items-center gap-2"
                      >
                        {download.title}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                );
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* CONTACT */}
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="text-[17px] bg-transparent hover:text-primary-red! hover:bg-transparent!"
          >
            <Link to="/contact">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
