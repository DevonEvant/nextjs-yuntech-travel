// import dotenv from "dotenv";
// dotenv.config(); // Load environment variables from .env file
// const apiKey = process.env.REACT_APP_MY_API_KEY; // Retrieve the environment variable
// console.log("API Key:", apiKey); // Use the environment variable as needed
"use client";

import { ScenicSpot } from "../../types/scenicSpot";
import { useState, useEffect } from "react";
import { MyNav } from "./components/Navigation";
import { MyCard } from "./components/Card";
import { MyFooter } from "./components/Footer";
import { MyCarousel } from "./components/Carousel"; // 路徑等同 "@/app/components/Carousel"

// nextjs export root(default) dir is "public/" == localhost:8787/
export default function Home() {
  const [items, setItems] = useState<ScenicSpot[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("api/items");
      const data = await response.json();
      setItems(data);
    })();
  }, []);

  return (
    <>
      <div className="bg-white dark:bg-gray-800">
        {/* 設定底色是白色的（在firefox 上預設是灰色的）*/}
        <div className="container mx-auto">
          {/* mx-auto == (margin-x-axis-size is auto (x == y == w/2 == fill up))*/}
          <MyNav />
        </div>

        <div className="container mx-auto">
          <MyCarousel />
        </div>

        <div className="py-16">
          <div className="container mx-auto grid grid-cols-4 gap-4">
            {items.map((item, idx) => (
              <MyCard
                key={parseInt(item.ScenicSpotID.replace(/\D/g, ""), 10) || idx}
                img={item.Picture.PictureUrl1}
                title={item.ScenicSpotName}
                imgAlt={item.Picture.PictureDescription1}
                description={item.Description}
              />
            ))}
          </div>
        </div>
        <MyFooter />
      </div>
    </>
  );
}
