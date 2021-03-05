const fse = require("fs-extra");
const chalk = require("chalk");
const { resolve } = require("path");
const { genfiles } = require("./genfiles");
const { install } = require("./install");
const { desc } = require("./utils");

async function init(argv) {
  const projectName = argv["project"];
  const template = argv["template"] || "es6+";
  const workspacePath = resolve(projectName);
  fse.ensureDirSync(projectName);
  console.log(`Creating a ${desc(template)} in ${chalk.green(workspacePath)}.`);

  // 生成模板

  await genfiles(workspacePath, template);

  // 安装依赖
  const pkgManager = await install(workspacePath, argv);

  // some tip
  console.log(`
Success! Created ${desc(template)} at ${chalk.green(workspacePath)}

We suggest that you begin by typing:

    ${chalk.cyan("cd")} ${projectName}
    ${chalk.cyan(`${pkgManager} start`)}

then open ${chalk.cyan("http://localhost:9000")} in your browser

Have a nice day!💯
  `);
}

module.exports = {
  init,
};
