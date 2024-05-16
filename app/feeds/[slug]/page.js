"use client";

import { FEEDS, getFeed } from "@/lib/rss";
import { useState, useEffect } from "react";
// import { format } from "date-fns";

export default function Feed({ params }) {
  const [feed, setFeed] = useState({});
  const [feedArr, setFeedsArr] = useState([])

  const getStaticPaths = (slug) => {
    let selectedInd = FEEDS.findIndex((i) => i.slug === slug);
    getFeeds(FEEDS[selectedInd].url)
    setFeed(FEEDS[selectedInd]);
  };

  const getFeeds = async (url) => {
    const detailedFeed = await getFeed(url);

    return {
      props: {
        feed,
        items: detailedFeed.items,
      },
      revalidate: 1,
    };
  };

  useEffect(() => {
    getStaticPaths(params.slug);
    
  }, []);

  return (
    <div className="px-6 py-12 max-w-xl mx-auto">
      <h1 className="font-bold text-5xl mb-12">{feed.title}</h1>
      <div className="space-y-4">
        {/* {items.map((item) => (
          <a
            key={item.link}
            className="block p-4 border border-gray-200 hover:border-gray-500 rounded-lg"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="font-bold">{item.title}</div>
            <div>{format(new Date(item.isoDate), "PPP")}</div>
          </a>
        ))} */}
      </div>
    </div>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: FEEDS.map((feed) => ({ params: { slug: feed.slug } })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   console.log(params);
//   // const feed = FEEDS.find((feed) => feed.slug === params.slug);
//   // const detailedFeed = await getFeed(feed.url);

//   // return {
//   //   props: {
//   //     feed,
//   //     items: detailedFeed.items,
//   //   },
//   //   revalidate: 1,
//   // };
// }
