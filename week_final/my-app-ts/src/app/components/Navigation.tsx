/* eslint-disable @next/next/no-img-element */
/**
 * @author CHANG, HUNG-YING <horningch@gmail.com>
 */
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Carousel as SceneNarration,
  DarkThemeToggle,
} from "flowbite-react";
import Link from "next/link";

export function MyNav() {
  return (
    <Navbar fluid rounded className="justify-between items-center">
      {/* rounded 設置圓角 is boolean; 是react 中的Navbar Components function的其中一個參數*/}
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-2xl font-semibold  dark:text-[#9ca3af]">
          雲林好好玩
        </span>
        {/* semi(半)bold(粗體/字重) */}
        {/* whitespace-nowrap(不斷行) */}
        {/* self-center(置中) */}
        {/* text-xl(字大小 1.25rem即1.25*16px) */}
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="flex items-center">
        {/* border-b aka border-bottom*/}
        {/* px aka padding-x-axis*/}
        {/* py aka padding-y-axis*/}
        <NavbarLink href="#">
          <span className="inline-block hover:text-red-700 hover:border-b-2 hover:border-yellow-500 px-4 py-2">
            交通
          </span>
        </NavbarLink>
        <NavbarLink href="#">
          <span className="inline-block hover:text-yellow-400 hover:border-yellow-400 hover:border-b-2 px-4 py-2">
            景點
          </span>
        </NavbarLink>
        <NavbarLink href="#">
          <span className="inline-block hover:text-green-500 hover:border-green-500 hover:border-b-2 px-4 py-2">
            關於我們
          </span>
        </NavbarLink>
        <div>
          <DarkThemeToggle />
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
