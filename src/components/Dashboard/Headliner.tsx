import React, { useState, useEffect } from "react";
import HeadlinerCard from "./HeadlinerCard";

type Props = { url: string };

const placeholder = {
  meta: {
    found: 1342,
    returned: 3,
    limit: 3,
    page: 1,
  },
  articles: [
    {
      uuid: "e56dd277-ea1f-423f-844a-8b4b05f61265",
      title: "The Shifting Paradigms of Asia's Video Game Industry",
      description: "",
      keywords: "",
      snippet:
        "Video games in the Asian markets boasts a global reputation. While Japan is already well-established in console gaming, South Korea has international prestige i...",
      url: "https://www.benzinga.com/markets/asia/23/01/30547889/the-shifting-paradigms-of-asias-video-game-industry",
      image:
        "https://cdn.benzinga.com/files/images/story/2023/01/24/shutterstock_663218446.jpg?width=1200&height=800&fit=crop",
      language: "en",
      published_at: "2023-01-24T14:31:35.000000Z",
      source: "benzinga.com",
      categories: ["business"],
      relevance_score: 36.62304,
      locale: "us",
    },
    {
      uuid: "b73d68b8-0c62-49f5-8c0d-6d52031708d3",
      title:
        "The FTC went after Fortnite. Now, the video game industry is on watch",
      description:
        "Two big lawsuits have the video game industry on watch. The government has gone after the maker of Fortnite, saying it's been illegally profiting off young play...",
      keywords: "",
      snippet:
        "The FTC went after Fortnite. Now, the video game industry is on watch\n\nTwo big lawsuits have the video game industry on watch. The government has gone after the...",
      url: "https://www.npr.org/2023/02/15/1157279984/the-ftc-went-after-fortnite-now-the-video-game-industry-is-on-watch",
      image:
        "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
      language: "en",
      published_at: "2023-02-15T22:01:30.000000Z",
      source: "npr.org",
      categories: ["general", "politics"],
      relevance_score: 34.753174,
      locale: "us",
    },
    {
      uuid: "9903f177-179e-40dd-9872-3af705732f56",
      title:
        "Interactive Google Doodle Game Celebrates Video Game Pioneer Jerry Lawson",
      description:
        'Known as the "father of the video game cartridge," Lawson led the team that would create a system that paved the way for several popular video game consoles.',
      keywords: "",
      snippet:
        "Jerry Lawson was a pioneer of modern gaming who, while one of the few Black men in the industry at the time, led the team that developed the first home video ga...",
      url: "https://www.cnet.com/culture/internet/interactive-google-doodle-game-celebrates-video-game-pioneer-jerry-lawson/#ftag=CAD590a51e",
      image:
        "https://www.cnet.com/a/img/resize/97749c94d45bc35720d0aaaf4b8e6edeeb54f786/hub/2022/11/30/7d9dc8ff-1b08-45aa-b70f-3613f2dca1d3/google-doodle-jerry-lawson-2022.jpg?auto=webp&fit=crop&height=630&width=1200",
      language: "en",
      published_at: "2022-11-30T22:11:13.000000Z",
      source: "cnet.com",
      categories: ["tech", "general"],
      relevance_score: 32.289387,
      locale: "us",
    },
  ],
};

type data = typeof placeholder;

export default function Headliner({ url }: Props) {
  const [articleList, setArticleList]: [data, Function] = useState(placeholder);

  async function getData() {
    //console.log("GetData");
    const response = await fetch(`${url}`, {
      method: "GET",
      mode: "cors",
      cache: "force-cache",
    });
    const data = await response.json();
    //console.log(data);
    setArticleList(data);
  }
  useEffect(() => {
    getData();
  }, []);
  console.log("im here", articleList);
  return (
    <div
      className="bg-yellow-300 h-full w-full flex flex-row flex-nowrap scrollingBanner"
      style={
        {
          "--percentSlide": `-${articleList?.articles?.length}00%`,
          "--timeSlide": `${articleList?.articles?.length * 8}s`,
        } as React.CSSProperties
      }
    >
      {articleList?.articles?.map?.((e) => {
        return <HeadlinerCard {...e} />;
      })}
      {articleList?.articles?.map?.((e) => {
        return <HeadlinerCard {...e} />;
      })}
    </div>
  );
}
