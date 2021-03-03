#!/usr/bin/env node
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { init } = require("./init");

yargs(hideBin(process.argv))
  .command(
    "init [project]",
    "init a morder javascript playground",
    () => {},
    (argv) => {
      init(argv);
    }
  )
  .strict()
  .recommendCommands()
  .alias("v", "version")
  .alias("h", "help")
  .option("use", {
    alias: "u",
    type: "string",
    description: "use yarn,npm or cnpm",
  }).argv;
