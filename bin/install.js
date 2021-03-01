const spawn = require("cross-spawn");
const chalk = require("chalk");

const pkgmanagers = {
  npm: "npm",
  cnpm: "cnpm",
  yarn: "yarn",
};

function install(workspacePath, argv) {
  return new Promise((resolve) => {
    process.chdir(workspacePath);
    const command = pkgmanagers[argv["u"]] || "npm";

    console.log(
      `we use ${command} to install packages in ${chalk.green(workspacePath)}.`
    );

    const args = ["install"];
    const child = spawn(command, args, {
      stdio: "inherit",
    });
    child.on("close", () => resolve(command));
  });
}

module.exports = {
  install,
};
