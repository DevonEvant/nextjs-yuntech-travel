/* eslint-disable @next/next/no-img-element */
// import dotenv from "dotenv";
// dotenv.config(); // Load environment variables from .env file
// const apiKey = process.env.REACT_APP_MY_API_KEY; // Retrieve the environment variable
// console.log("API Key:", apiKey); // Use the environment variable as needed
"use client";

import { useState, useEffect } from "react";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { sampleSize } from "lodash-es";
import { Transition } from "@headlessui/react";

import { type ScenicSpot as ScenicSpotProps } from "@type/scenicSpot";
import { type Carousel as CarouselProps } from "@type/carousel";
import { type GuessWhere as GuessWhereProps } from "@type/guessWhere";
import { type OverviewCard as OverviewCardProps } from "@type/overviewCard";
import { MyNav } from "@app/components/Navigation";
import { MyCard } from "@app/components/Card";
import { MyFooter } from "@app/components/Footer";
import { MyCarousel } from "@app/components/Carousel"; // 路徑等同 "@/app/components/Carousel"

import "@styles/keyframes.css";

// nextjs export root(default) dir is "public/" == localhost:8787/
export default function Home() {
  const [items, setItems] = useState<ScenicSpotProps[]>([]);
  const [itemsClassification, setItemsClassification] = useState<Set<string>>(
    new Set(),
  );
  const [carouselItems, setCarouselItems] = useState<CarouselProps[]>([]);
  const [guessWhereItem, setGuessWhereItem] = useState<GuessWhereProps>({
    imgSrc: "",
    alt: "",
    title: "",
    description: "",
    city: "",
  });
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isGuessWhereContentVisible, setIsGuessWhereContentVisible] =
    useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    (async () => {
      const response = await fetch("api/items");
      const data: ScenicSpotProps[] = await response.json();
      setItems(data);
    })();
  }, []);

  useEffect(() => {
    const carouselItems = sampleSize(items, 10).map((obj, idx: number) => ({
      imgSrc: obj.Picture.PictureUrl1,
      alt: obj.Picture.PictureDescription1 || "",
      key: parseInt(obj.ScenicSpotID.replace(/\D/g, ""), 10) || idx,
    }));

    setCarouselItems(carouselItems);
  }, [items]);

  useEffect(() => {
    const updateGuessWhereItem = () => {
      const _guessWhereItem = sampleSize(items, 1).map((obj) => {
        return {
          imgSrc: obj.Picture.PictureUrl1,
          alt: obj.Picture.PictureDescription1 || "",
          title: obj.ScenicSpotName,
          description: obj.DescriptionDetail,
          city: obj.City,
        };
      })[0];

      setGuessWhereItem(_guessWhereItem);
      setIsGuessWhereContentVisible(true);

      setTimeout(() => {
        setIsGuessWhereContentVisible(false);
      }, 7900);
    };

    updateGuessWhereItem();
    const guessWhereItemInterval = setInterval(updateGuessWhereItem, 8000);
    return () => {
      clearInterval(guessWhereItemInterval);
    };
  }, [items]);

  useEffect(() => {
    const classification = new Set<string>();

    items.forEach((obj) => {
      if (obj.Class1 !== undefined) classification.add(obj.Class1);
    });

    setItemsClassification(classification);
  }, [items]);

  return (
    <>
      <div className="bg-[#f5f5f7] dark:bg-gray-700">
        {/* 設定底色是白色的（在firefox 上預設是灰色的）*/}
        <div
          className={`transition-transform duration-400 ${isNavVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
          <div className="rounded-b-3xl overflow-hidden">
            <div className="bg-white dark:bg-[#1f2937]">
              <div className="container mx-auto">
                {/* mx-auto == (margin-x-axis-size is auto (x == y == w/2 == fill up))*/}
                <MyNav />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-10">
          <MyCarousel props={carouselItems} />
        </div>

        {guessWhereItem && (
          <div className="container mx-auto mt-10 ">
            <Transition
              show={isGuessWhereContentVisible}
              enter="transition ease-out duration-100 transform"
              enterFrom="translate-x-10 opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="transition ease-in duration-100 transform"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="-translate-x-10 opacity-0"
              as="div"
            >
              <div className="w-full p-6 pb-0 pl-0 flex justify-start">
                <span className="text-5xl text-blue-800 dark:text-lime-400">
                  到了{guessWhereItem.city}，卻不知道有哪些景點玩？
                </span>
              </div>

              <div className="bg-white dark:bg-block mt-3 rounded-3xl overflow-hidden dark:bg-[#1f2937]">
                <div className="flex flex-col items-start">
                  <div className="w-full pl-6 pb-0 pr-0 pt-0">
                    <div className="flex flex-row items-start justify-around">
                      {/* <div className="w-6 pb-6 inline-block"></div>*/}
                      <div className="w-5/12 p-6 text-2xl m-auto dark:text-[#9ca3af]">
                        <div className="text-4xl text-blue-800 pb-6 dark:text-lime-500">
                          {guessWhereItem.title.length < 150
                            ? guessWhereItem.title
                            : guessWhereItem.title.substring(0, 150) + "..."}
                        </div>

                        {guessWhereItem.description.length < 150
                          ? guessWhereItem.description
                          : guessWhereItem.description.substring(0, 150) +
                            "..."}
                      </div>
                      <div className="ml-auto ">
                        <img
                          style={{
                            "max-width": "800px",
                            "max-height": "600px",
                          }}
                          src={guessWhereItem.imgSrc}
                          alt={guessWhereItem.alt}
                          className="object-fill w-full h-full"
                          loading="lazy"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        )}

        {/*
        <div className="flex flex-col overflow-y-scroll snap-y snap-mandatory w-64 h-96">
          <div className="flex-shrink-0 w-64 h-64 bg-blue-500 snap-start">
            Item 1
          </div>
          <div className="flex-shrink-0 w-64 h-64 bg-red-500 snap-start">
            Item 2
          </div>
          <div className="flex-shrink-0 w-64 h-64 bg-green-500 snap-start">
            Item 3
          </div>
          <div className="flex-shrink-0 w-64 h-64 bg-lime-500 snap-start">
            Item 4
          </div>
        </div>
                */}

        {/*
        <div className="container mx-auto mt-10 ">
          <div className="w-full p-6 pb-0 pl-0  flex justify-start">
            <span className="text-5xl text-blue-800 ">Look Here！</span>
          </div>
          <div className="bg-white rounded-3xl mt-3 ">
            <div className="scroll-container flex overflow-hidden mb-1">
              <div
                className="scroll-content flex items-center"
                style={{
                  animation: `scroll ${items.length * 10}s linear infinite`,
                }}
              >
                {[...items].reverse().map((item, idx) => (
                  <div
                    className="mx-auto p-3"
                    key={
                      parseInt(item.ScenicSpotID.replace(/\D/g, ""), 10) || idx
                    }
                  >
                    <MyCard
                      props={
                        {
                          imgSrc: item.Picture.PictureUrl1,
                          alt: item.Picture.PictureDescription1,
                          title: item.ScenicSpotName,
                          description: item.Description,
                        } as OverviewCardProps
                      }
                      expandable={false}
                      fixedStyle={true}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
                */}

        <div className="container mx-auto mt-10 ">
          <div className="w-full p-6 pb-0 pl-0  flex justify-start">
            <span className="text-5xl text-blue-800 dark:text-lime-500">想參訪文化類景點？</span>
          </div>
          <div className="bg-white rounded-3xl mt-3  dark:bg-[#1f2937]">
            <div className="scroll-container flex overflow-hidden mb-1">
              <div
                className="scroll-content flex items-center"
                style={{
                  animation: `scroll ${
                    items.filter((obj) => obj.Class1 === "文化類").length * 10
                  }s linear infinite`,
                }}
              >
                {items
                  .filter((obj) => obj.Class1 === "文化類")
                  .map((item, idx) => (
                    <div
                      className="mx-auto p-3"
                      key={
                        parseInt(item.ScenicSpotID.replace(/\D/g, ""), 10) ||
                        idx
                      }
                    >
                      <MyCard
                        props={
                          {
                            imgSrc: item.Picture.PictureUrl1,
                            alt: item.Picture.PictureDescription1,
                            title: item.ScenicSpotName,
                            description: item.Description,
                          } as OverviewCardProps
                        }
                        expandable={false}
                        fixedStyle={true}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-10 ">
          <div className="w-full p-6 pb-0 pl-0  flex justify-start">
            <span className="text-5xl text-blue-800 dark:text-lime-500">
              或是自然風景類景點？
            </span>
          </div>
          <div className="bg-white rounded-3xl mt-3  dark:bg-[#1f2937]">
            <div className="scroll-container flex overflow-hidden mb-1">
              <div
                className="scroll-content flex items-center"
                style={{
                  animation: `scroll ${
                    items.filter((obj) => obj.Class1 === "自然風景類").length *
                    10
                  }s linear infinite`,
                }}
              >
                {items
                  .filter((obj) => obj.Class1 === "自然風景類")
                  .map((item, idx) => (
                    <div
                      className="mx-auto p-3"
                      key={
                        parseInt(item.ScenicSpotID.replace(/\D/g, ""), 10) ||
                        idx
                      }
                    >
                      <MyCard
                        props={
                          {
                            imgSrc: item.Picture.PictureUrl1,
                            alt: item.Picture.PictureDescription1,
                            title: item.ScenicSpotName,
                            description: item.Description,
                          } as OverviewCardProps
                        }
                        expandable={false}
                        fixedStyle={true}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto mt-10 ">
          <div className="w-full p-6 pb-0 pl-0  flex justify-start">
            <span className="text-5xl text-blue-800 dark:text-lime-500">
              都不喜歡？沒關係，雲林縣還有很多好玩的
            </span>
          </div>
          <div className=" rounded-3xl mt-3 ">
            <ResponsiveMasonry
              className=""
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry className="pt-3 pr-3 pl-3">
                {items.map((item, idx) => (
                  <div
                    className="masonry-item mx-auto p-3"
                    key={
                      parseInt(item.ScenicSpotID.replace(/\D/g, ""), 10) || idx
                    }
                  >
                    <MyCard
                      props={
                        {
                          imgSrc: item.Picture.PictureUrl1,
                          alt: item.Picture.PictureDescription1,
                          title: item.ScenicSpotName,
                          description: item.Description,
                        } as OverviewCardProps
                      }
                      expandable={true}
                      fixedStyle={false}
                    />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>

      {/* mx-auto == (margin-x-axis-size is auto (x == y == w/2 == fill up))*/}
      <MyFooter />
    </>
  );
}
