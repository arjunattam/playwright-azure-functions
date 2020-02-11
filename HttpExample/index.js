//@ts-check
const chromium = require("playwright-chromium");
const fs = require("fs");

module.exports = async function(context, req) {
  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "google.png" });
  await browser.close();

  context.res = {
    status: 202,
    body: Buffer.from(fs.readFileSync("google.png")),
    headers: {
      "Content-Type": "image",
      "Content-Disposition": `attachment; filename=google.png`
    }
  };
};