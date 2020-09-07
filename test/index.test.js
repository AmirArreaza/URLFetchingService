const urlRequests = require("../index.js");

it("Succesfully fetch a group of URLs", async () => {
  const urls = [];
  urls.push(
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json"
  );
  urls.push(
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json"
  );
  urls.push(
    "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json"
  );

  const result = await urlRequests.requestMultipleUrls(urls);

  expect(result.length).toEqual(3);
  
});

it("Failed fetch site", async () => {
  const urls = [];
  urls.push(
    "https://xxxxxxxxxx"
  );

  const result = await urlRequests.requestMultipleUrls(urls);

  expect(result[0]).toEqual("ENOTFOUND");  
});
