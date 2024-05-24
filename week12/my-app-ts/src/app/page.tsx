import Image from "next/image";

import Link from "next/link";
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

type path = string;

interface SceneNarration {
    cover: path,
    title: string,
    author: string,
    description: string,
    license: string,
    id: string,
}

// nextjs export root(default) dir is "public/" == localhost:8787/
export default function Home() {

    const fack_data: SceneNarration[] = [
        {
            cover: "/images/Chaotien_Temple.jpg",
            title: "北港朝天宮",
            author: "WU PEI HSUAN",
            description: "北港朝天宮，俗稱北港媽，當地人稱媽祖宮、媽祖廟，舊稱為天后宮。是一座位在臺灣雲林縣北港鎮光民里的媽祖廟，主祀天上聖母媽祖。 該廟由臨濟宗第34代樹璧和尚創立於康熙三十三年。",
            license: "由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869",
            id: "1",
        }
    ]


    // <img src="/images/Chaotien_Temple.jpg" alt="由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869" />
    // <img src="/images/Longshan_Temple,_Taipei_01.jpg" alt="由 Bernard Gagnon - 自己的作品, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=14932830" />
    return (
        <>
            <div className="bg-white dark:bg-gray-800">
                { /* 設定底色是白色的（在firefox 上預設是灰色的）*/}
                <div className="container mx-auto">
                    { /* mx-auto == (margin-x-axis-size is auto (x == y == w/2 == fill up))*/}
                    <MyNav />

                </div>

                <div className="container mx-auto">
                    <MyCarousel />
                </div>

                <div className="py-16">
                    <div className="container mx-auto grid grid-cols-4 gap-4">
                        {fack_data.map(content => (<MyCard key={content.id} content={content} />))}
                    </div>
                </div>
                <MyFooter />

            </div >

        </>
    );
}


function MyNav() {


    return (
        <Navbar fluid rounded>
            { /* rounded 設置圓角 is boolean; 是react 中的Navbar Components function的其中一個參數*/}
            <NavbarBrand as={Link} href="https://flowbite-react.com">
                <img src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Horinig Home</span>
                { /* semi(半)bold(粗體/字重) */}
                { /* whitespace-nowrap(不斷行) */}
                { /* self-center(置中) */}
                { /* text-xl(字大小 1.25rem即1.25*16px) */}
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

function MyFooter() {

    return (
        <Footer container>
            <FooterCopyright href="#" by="Flowbite™" year={2022} />
            <FooterLinkGroup>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Licensing</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
        </Footer>
    );
}

function MyCarousel() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <SceneNarration>
                <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="" />
                <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="" />
                <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="" />
                <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="" />
                <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="" />
            </SceneNarration>
        </div>
    );
}



function MyCard({ content, }: Readonly<{ content: SceneNarration; }>) {
    return (
        <Card
            className="max-w-sm"
            imgAlt={content.license.trim()}
            imgSrc={content.cover}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {content.title.trim()}
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
                {content.description.trim()}
            </p>
            
            <Button>
                Read more
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </Button>
        </Card>
    );
}
