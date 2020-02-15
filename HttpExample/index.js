//@ts-check
const playwright = require("playwright");

const args = {
  "chromium": ["--no-sandbox", "--disable-setuid-sandbox"],
  "firefox": [],
  "webkit": []
}

module.exports = async function(context, req) {
  const { browser: name } = req.query;
  const browser = await playwright[name].launch({
    args: args[name]
  });

  const page = await browser.newPage();
  await page.goto("http://whatsmyuseragent.org/");

  const buffer = (await page.screenshot()).toString("base64");
  await browser.close();

  context.res = {
    status: 200,
    body: `<p>${name}</p><img src="data:image/png;base64, ${buffer}" />`,
    headers: {
      "Content-Type": "text/html"
    }
  };
};
