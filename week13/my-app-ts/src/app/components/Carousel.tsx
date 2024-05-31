import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Carousel as SceneNarration,
  Card,
  Button,
  DarkThemeToggle,
} from "flowbite-react";
import Link from "next/link";

export function MyCarousel() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <SceneNarration>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt=""
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt=""
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt=""
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt=""
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt=""
        />
      </SceneNarration>
    </div>
  );
}
