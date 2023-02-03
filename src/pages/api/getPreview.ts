import type { NextApiRequest, NextApiResponse } from "next";
import Chromium from "chrome-aws-lambda";

type Data = {
  url: string;
};

let browser: any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return res.status(404);

  const data = req.body;

  if (data) {
    try {
      browser = await Chromium.puppeteer.launch();
      const page = await browser.newPage();

      await page.setViewport({
        width: 1360,
        height: 768,
      });

      await page.goto(JSON.parse(data).url, {
        waitUntil: "networkidle2",
      });

      const imageScreenshot = await page.screenshot();

      await browser.close();

      res.setHeader("Content-type", "image/png");
      res.setHeader("Cache-Control", "s-maxage=3600000");

      return res.status(200).end(imageScreenshot);
    } catch (e) {
      browser?.close();
      return res.status(500).end("f");
    }
  }

  return res.status(400).end("URL is not provided");
}
