import React from "react";

type Props = { image: string; title: string; snippet: string; url: string };

export default function HeadlinerCard({ image, title, snippet, url }: Props) {
  return (
    <div className="w-full shrink-0  h-full flex flex-row relative">
      <a href={url} target="_blank" className="w-full">
        <img src={image} className="w-full bg-cover h-full" />

        <div className="absolute top-0 w-5/6">
          <div>
            <h1 className="my-12 mx-8 text-white text-lg md:text-4xl font-extrabold tracking-wider line-clamp-3 p-4 backdrop-blur-md bg-black bg-opacity-80 w-5/6">
              {title}
            </h1>
            {/* <h2 className="line-clamp-1 w-2/3">{snippet}</h2> */}
          </div>
        </div>
      </a>
    </div>
  );
}
