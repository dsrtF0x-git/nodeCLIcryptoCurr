const KeyManager = require("../lib/KeyManager");
const CryptoApi = require("../lib/CryptoApi");


const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      const api = new CryptoApi(key);

      const priceOutput = await api.getPriceData(cmd.coin, cmd.cur);

      console.log(priceOutput)
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = check;