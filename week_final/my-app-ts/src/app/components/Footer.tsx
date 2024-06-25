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
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6 lg:col-span-6">
              <div className="flex flex-row items-center">
                <p> &copy; 2014 Chang, Hong-Ying </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
