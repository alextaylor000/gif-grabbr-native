const GIPHY_API_URL = `https://api.giphy.com`;
const GIPHY_PUB_KEY = `dc6zaTOxFJmzC`;

export default function getGif(query) {
  const querySanitized = encodeURIComponent(query);
  const url = `${GIPHY_API_URL}/v1/gifs/random?api_key=${GIPHY_PUB_KEY}&tag=${querySanitized}`;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        resolve(response.json())
      })
      .catch(reject);
  });
}
