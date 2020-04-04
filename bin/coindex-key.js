const program = require("commander");
const key = require("../commands/key");

program
  .command("set")
  .description("Set Api key -- get at https://nomics.com")
  .action(key.set);

program
.command("show")
.description("Show")
.action(key.show);

program
.command("remove")
.description("Remove")
.action(key.remove);

program.parse(process.argv);