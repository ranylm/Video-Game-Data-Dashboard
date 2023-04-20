import { Description } from "@radix-ui/react-toast";
import React from "react";

import { useAutoAnimate } from "@formkit/auto-animate/react";

type Props = {
  title: string;
  author?: string;
  description: string;
  content: string;
  url: string;
  image?: string | undefined;
  urlToImage?: string | undefined;
  image_url?: string | undefined;
  link?: string | undefined;
  double: boolean;
  //publishedAt: string;
  source: {
    name: string;
    //url: string;
  };
};

export default function Article({
  title,
  author = "test",
  content,
  url,
  source,
  urlToImage,
  image_url,
  image,
  description,
  link,
  double,
}: Props) {
  const [parent, _enableAnimations] = useAutoAnimate(/* optional config */);
  //console.log(title, content, url, source, urlToImage || image, author);
  return (
    <article
      ref={parent}
      className={`${double ? "w-1/2" : ""}  rounded-md overflow-hidden p-3`}
    >
      <div
        className={`relative ${
          !(urlToImage || image || image_url) ? "h-32 bg-slate-400" : ""
        } `}
      >
        <img
          src={urlToImage || image || image_url}
          className="w-min relative rounded-t-md"
        />
        <div className="absolute top-0 left-0 z-10 backdrop-blur-sm h-full rounded-t-md ">
          <div className="flex flex-col align-middle justify-center h-full">
            <h1 className="text-xl font-semibold tracking-tight m-5 text-white line-clamp-4">
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-neutral-100 rounded-md">
        <p className="m-3 font-serif text-base tracking-wide mt-2 line-clamp-4">
          {content || description}
        </p>
        <div className="flex flex-row justify-between">
          {author ? (
            <p className=" bg-neutral-100 h-4 text-xs uppercase text-gray-700 mx-4  tracking-widest font-serif line-clamp-1 hover:line-clamp-none">
              {author}
            </p>
          ) : undefined}
          <a
            className="mx-4 mb-2 font-mono text-gray-700 whitespace-nowrap"
            target="_blank"
            href={url || link || ""}
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
}
