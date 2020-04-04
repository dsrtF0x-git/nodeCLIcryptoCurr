const ConfigStore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new ConfigStore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error("There is no such key. Get a key at https://nomix.com")
    }

    return key;
  }

  deleteKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error("There is no such key. Get a key at https://nomix.com")
    }

    this.conf.delete("apiKey");

    return;
  }
}

module.exports = KeyManager;