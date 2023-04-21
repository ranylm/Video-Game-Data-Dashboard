import React from "react";
import ArticleList from "../components/Dashboard/ArticleList";
import Headliner from "../components/Dashboard/Headliner";

type Props = {};

export default function Dashboard({}: Props) {
  return (
    <div className=" min-h-screen flex flex-col">
      <h1 className="text-center text-5xl font-semibold text-slate-700 font-sans tracking-tighter my-4">
        Dashboard
      </h1>
      <header className="flex flex-row rounded-xl overflow-hidden m-0 p-0">
        {/* <div className="m-4 w-1/5 h-72 bg-green-300">
          small side box small summary of info
        </div> */}
        <div className="m-8 rounded-xl my-4 w-full h-72 bg-green-300 overflow-hidden">
          <Headliner
            url={`https://gnews.io/api/v4/search?q=(sony) AND game&lang=en&apikey=${
              import.meta.env.VITE_GNEWS_API
            }`}
          />
        </div>
      </header>
      <main className="flex flex-row">
        <ArticleList
          double={true}
          //CORS not allowed maybe?
          // url={`https://newsapi.org/v2/everything?q=nintendo&apiKey=${
          //   import.meta.env.VITE_NEWS_API
          // }&language=en`}
          url={`https://api.currentsapi.services/v1/search?language=en&category=game&apiKey=${
            import.meta.env.VITE_CURRENTS_API
          }`}
        />

        <ArticleList
          url={`https://newsdata.io/api/1/news?apikey=${
            import.meta.env.VITE_NEWSDATA_API
          }&language=en&q=xbox AND microsoft&country=us,gb`}
        ></ArticleList>
      </main>
    </div>
  );
}
