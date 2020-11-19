require("dotenv").config();
const chromium = require("chrome-aws-lambda");

exports.handler = async (event, context) => {
  let executablePath = await chromium.executablePath;
  if (
    executablePath ===
    "/var/folders/cz/st9_s24d0fgb3f4qqkn25bqh0000gq/T/chromium"
  ) {
    executablePath =
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  }
  console.log(executablePath);
  const browser = await chromium.puppeteer.launch({
    args: await chromium.args,
    executablePath: executablePath,
    headless: true,
  });
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
