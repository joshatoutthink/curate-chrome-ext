require("dotenv").config();
const chromium = require("chrome-aws-lambda");
const puppeteer =
  process.env.NODE_ENV !== "production"
    ? require("puppeteer")
    : require("puppeteer-core");
exports.handler = async (event, context) => {
  const browser = await puppeteer.launch({});

  const page = await browser.newPage();

  await page.goto(
    "https://bitsofco.de/how-to-use-puppeteer-in-a-netlify-aws-lambda-function/"
  );

  const screenshot = await page.screenshot({ encoding: "binary" });

  await browser.close();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Complete screenshot of nothing`,
      // buffer: screenshot,
    }),
  };
};
