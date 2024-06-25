/* eslint-disable @next/next/no-img-element */
/**
 * @author CHANG, HUNG-YING <horningch@gmail.com>
 */
import { Card, Button } from "flowbite-react";
import { OverviewCard as OverviewCardProps } from "@type/overviewCard";
import { useEffect, useRef, useState } from "react";

// type path = string;
// export interface SceneNarration {
//   cover: path;
//   title: string;
//   author: string;
//   description: string;
//   license: string;
//   id: string;
// }

export function MyCard({
  props,
  expandable = true,
  fixedStyle = false,
}: {
  expandable: boolean;
  fixedStyle: boolean;
  props: Readonly<OverviewCardProps>;
}) {
  const cardContainer = useRef(null);
  const secondPage = useRef(null);

  // .container {
  //     width: 300px;
  //     background-color: #f0f0f0;
  //     overflow: hidden;
  //     transition: height 0.3s ease;
  //     padding: 10px;
  // }
  //
  // .content {
  //     padding: 10px;
  //     transition: opacity 0.3s ease;
  // }

  return (
    <>
      <div
        ref={cardContainer}
        className={`${expandable ? "group" : ""} overflow-hidden relative flex-none bg-white rounded-3xl dark:bg-[#1f2937]`}
        style={{ transition: `height 0.3s ease` }}
      >
        <div className="flex flex-col justify-between items-center transition-all duration-300">
          <img
            className=""
            style={
              fixedStyle ? { "max-width": "256px", "max-height": "160px" } : {}
            }
            src={props.imgSrc}
            alt={props.alt}
          ></img>
          <div className="text-3xl text-blue-800 dark:text-yellow-500 p-3">
            {props.title}
          </div>
        </div>

        <div
          ref={secondPage}
          style={{ transition: `height 0.3s ease` }}
          className="hidden group-hover:block"
        >
          <div className="flex flex-col justify-between items-stretch ">
            <div className="text-2xl text-black p-3 dark:text-[#9ca3af]">
              {props.description.length > 100
                ? props.description.substring(0, 100) + "..."
                : props.description}
            </div>

            <Button>
              Read more
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
