const axios = require("axios");
const colors = require("colors");

class CryptoApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = `https://api.nomics.com/v1/currencies/ticker?key=`;
  }

  async getPriceData(coinOption, curOption) {
    try {

      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: curOption
      });

      const res = await axios.get(
        `${this.baseURL}${this.apiKey}&ids=${coinOption}&interval=1d,30d&convert=${curOption}`
      );

      let output = "";
      res.data.forEach(coin => {
        output += `Coin: ${coin.symbol.yellow} | ${coin.name} | ${formatter.format(coin.price).green} | ${coin.rank.blue}|\n`;
      });

      return output;
    } catch (error) {
      handleApiError(error);
    }
  }
}

function handleApiError(err) {
  if (err.response.status == 401) {
    throw new Error("Your api key is invalid. Go to https://nomics.com");
  } else if (err.response.status == 404) {
    throw new Error("Api is not responding");
  } else {
    throw new Error("Something went wrong");
  }
}

module.exports = CryptoApi;