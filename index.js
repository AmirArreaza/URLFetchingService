const axios = require("axios");

async function getURL(url) {
  try {
    const response = await axios.get(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error.errno;
  }
}

function requestMultipleUrls(urls) {
  const promises = urls.map(async (url) => {
    return await getURL(url);
  });

  return Promise.all(promises).then((response) => {
    return response;
  }).catch(error => {
    return error;
  });
}

module.exports = { requestMultipleUrls };
