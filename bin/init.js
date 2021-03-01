const fse = require("fs-extra");
const chalk = require("chalk");
const { resolve } = require("path");
const { genfiles } = require("./genfiles");
const { install } = require("./install");

async function init(argv) {
  const projectName = argv["project"];
  const workspacePath = resolve(projectName);
  fse.ensureDirSync(projectName);
  console.log(
    `Creating a new morden javascript playground in ${chalk.green(
      workspacePath
    )}.`
  );

  // 生成模板

  await genfiles(workspacePath);

  // 安装依赖
  const pkgManager = await install(workspacePath, argv);

  // some tip
  console.log(`
Success! Created mordern javascript playground at ${chalk.green(workspacePath)}

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
