// import Image from "next/image";

// import dotenv from "dotenv";
// dotenv.config(); // Load environment variables from .env file
// const apiKey = process.env.REACT_APP_MY_API_KEY; // Retrieve the environment variable
// console.log("API Key:", apiKey); // Use the environment variable as needed

import { MyNav } from "./components/Navigation";
import { MyCard, SceneNarration } from "./components/Card";
import { MyFooter } from "./components/Footer";
import { MyCarousel } from "./components/Carousel"; // 路徑等同 "@/app/components/Carousel"

// nextjs export root(default) dir is "public/" == localhost:8787/
export default function Home() {
  const fack_data: SceneNarration[] = [
    {
      cover: "/images/Chaotien_Temple.jpg",
      title: "北港朝天宮",
      author: "WU PEI HSUAN",
      description:
        "北港朝天宮，俗稱北港媽，當地人稱媽祖宮、媽祖廟，舊稱為天后宮。是一座位在臺灣雲林縣北港鎮光民里的媽祖廟，主祀天上聖母媽祖。 該廟由臨濟宗第34代樹璧和尚創立於康熙三十三年。",
      license:
        "由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869",
      id: "1",
    },
    {
      cover: "/images/Longshan_Temple,_Taipei_01.jpg",
      title: "艋舺龍山寺",
      author: "Bernard Gagnon",
      description:
        "艋舺龍山寺（臺灣話：Báng-kah liông-san-sī），也稱萬華龍山寺，是位於臺灣臺北市萬華區（艋舺）的觀音寺，為龍山寺之一。建築列為國定古蹟。 ",
      license:
        "由 Bernard Gagnon - 自己的作品, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=14932830",
      id: "1",
    },
  ];

  const fack_data2: any[] = [];

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
            {fack_data.map((content) => (
              <MyCard key={content.id} content={content} />
            ))}
          </div>
        </div>
        <MyFooter />
      </div>
    </>
  );
}
