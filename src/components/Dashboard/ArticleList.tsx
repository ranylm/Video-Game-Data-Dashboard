import React, { useEffect, useState } from "react";
import Article from "./Article";

import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = { url: string; double?: boolean };

const placeholder = {
  title:
    "Here's every Xbox and PC game shown at the Nintendo Indie World Direct",
  description:
    "The Nintendo Indie Direct helped reveal several upcoming PC and Xbox games. Here are all of the titles that got mentioned.",
  content:
    "This morning, Nintendo held its latest Indie World Direct showcase which shows off several indie games coming to the Switch in the coming months. While obviously targeted at Switch owners, several of the mentioned games and DLC are also coming to Xbo... [6003 chars]",
  url: "https://www.windowscentral.com/gaming/heres-every-xbox-and-pc-game-shown-at-the-nintendo-indie-world-direct",
  image: "https://cdn.mos.cms.futurecdn.net/EERJbN3gAEsdJCQiCxWx9o-1200-80.jpg",
  publishedAt: "2023-04-19T19:26:34Z",
  source: {
    name: "Windows Central",
    url: "https://www.windowscentral.com",
  },
};
type ArticleList = {
  articles?: {}[];
  data?: {}[];
  results?: {}[];
  news?: {}[];
};

const placeholder2 = {};
export default function ArticleList({ url, double }: Props) {
  const [articleList, setArticleList]: [ArticleList | undefined, Function] =
    useState();

  const [parent, _enableAnimations] = useAutoAnimate(/* optional config */);
  async function getData() {
    //console.log("GetData");
    const response = await fetch(`${url}`, {
      method: "GET",
      mode: "no-cors",
      cache: "force-cache",
    });
    const data = await response.json();
    //console.log(data);
    setArticleList(data);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <section
      ref={parent}
      className={`${
        double ? "w-2/3" : "w-1/3"
      } bg-neutral-300 rounded-md m-3 flex flex-row flex-wrap shadow-xl h-fit gap-0`}
    >
      {(
        articleList?.articles ||
        articleList?.data ||
        articleList?.results ||
        articleList?.news
      )?.map?.((e) => {
        console.log(e);
        return <Article {...e} double={double} />;
      })}
    </section>
  );
}
