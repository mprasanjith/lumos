import { parse } from "rss-to-json";

export default async function handler(req, res) {
  var rss = await parse(
    "https://www.news-medical.net/tag/feed/Parkinsons-Disease.aspx"
  );

  res.status(200).json(rss?.items);
}
