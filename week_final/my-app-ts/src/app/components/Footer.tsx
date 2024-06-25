/**
 * @author CHANG, HUNG-YING <horningch@gmail.com>
 */
// import {
//   Footer,
//   FooterCopyright,
//   FooterLink,
//   FooterLinkGroup,
// } from "flowbite-react";

export function MyFooter() {
  return (
    <>
      <footer className="py-5 bg-[#f5f5f7] dark:bg-gray-800">
        <div className="container mx-auto h-max">
          <div className="flex flex-row items-start">
            <div className="flex flex-row items-center justify-start w-6/12">
              <p> &copy; 2014 Chang, Hong-Ying </p>
            </div>

            <div className="inline-block w-2/12"></div>

            <div className="flex flex-row items-center justify-around w-4/12">
              <div className="">About Privacy Policy</div>
              <div className="">Licensing</div>
              <div className="">Contact</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
