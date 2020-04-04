const KeyManager = require("../lib/KeyManager");
const inquirer = require("inquirer");
const colors = require("colors");
const { isRequired } = require("../utils/validation");

const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter api key".green + "https://nomics.com",
        validate: isRequired
      }
    ])

    const key = keyManager.setKey(input.key);

    if (key) {
      console.log("Api key set".blue);
    }
  },

  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      console.log(key);
      return key;
    } catch (error) {
      console.log(error)
    }
  },

  remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();
      console.log("key was deleted");
      return;
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = key;