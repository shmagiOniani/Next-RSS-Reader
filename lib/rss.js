import Parser from "rss-parser";

export const FEEDS = [
  {
    slug: "Upw First",
    title: "Upwork First",
    url: "https://www.upwork.com/ab/feed/jobs/rss?api_params=1&amp;client_hires=1-9%2C10-&amp;orgUid=1215517476942635009&amp;paging=0%3B10&amp;q=%28title%3A%28React%29%20OR%20title%3A%28Frontend%29%20OR%20title%3A%28Angular%29%20OR%20title%3A%28react%29%29&amp;securityToken=2b8186dc354d9557f6d72077c9daad7a629cef6605d91136a3836e4f976c7dfbd617631e91cbff4fc977dea9741343b977a274724a91bbf0af82ec6000761333&amp;sort=recency&amp;userUid=1215517476934246400&amp;verified_payment_only=1",
  },
  {
    slug: "Upw Second",
    title: "Upwork Second",
    url: "https://www.upwork.com/ab/feed/jobs/rss?q=%28title%3A%28React%29+OR+title%3A%28Frontend%29+OR+title%3A%28Angular%29+OR+title%3A%28react%29%29&client_hires=1-9%2C10-&verified_payment_only=1&sort=recency&paging=0%3B10&api_params=1&securityToken=2b8186dc354d9557f6d72077c9daad7a629cef6605d91136a3836e4f976c7dfbd617631e91cbff4fc977dea9741343b977a274724a91bbf0af82ec6000761333&userUid=1215517476934246400&orgUid=1215517476942635009",
  },
  
];

export async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}
