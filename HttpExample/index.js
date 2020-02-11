//@ts-check
const { chromium } = require("playwright");
const fs = require("fs");

module.exports = async function(context, req) {
  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "google2.png" });
  await browser.close();

  context.res = {
    status: 202,
    body: Buffer.from(fs.readFileSync("google2.png")),
    headers: {
      "Content-Type": "image",
      "Content-Disposition": `attachment; filename=google2.png`
    }
  };
};