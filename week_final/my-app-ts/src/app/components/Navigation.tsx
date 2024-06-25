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
    <Navbar fluid rounded>
      {/* rounded 設置圓角 is boolean; 是react 中的Navbar Components function的其中一個參數*/}
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img
          src="https://www.yuntech.edu.tw/images/website_png/Group_640.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
          loading="lazy"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          雲林布袋戲館
        </span>
        {/* semi(半)bold(粗體/字重) */}
        {/* whitespace-nowrap(不斷行) */}
        {/* self-center(置中) */}
        {/* text-xl(字大小 1.25rem即1.25*16px) */}
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {/* border-b aka border-bottom*/}
        {/* px aka padding-x-axis*/}
        {/* py aka padding-y-axis*/}
        <NavbarLink href="#">
          <span className="hover:text-red-700 hover:border-b-2 hover:border-yellow-500 px-4 py-2">
            交通
          </span>
        </NavbarLink>
        <NavbarLink href="#">
          <span className="hover:text-yellow-400 hover:border-yellow-400 hover:border-b-2 px-4 py-2">
            景點
          </span>
        </NavbarLink>
        <NavbarLink href="#">
          <span className="hover:text-green-500 hover:border-green-500 hover:border-b-2 px-4 py-2">
            關於我們
          </span>
        </NavbarLink>
      </NavbarCollapse>

      <DarkThemeToggle />
    </Navbar>
  );
}
