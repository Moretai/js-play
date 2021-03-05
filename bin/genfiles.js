const path = require("path");
const copy = require("copy");

const copyPromisify = (src, dest) =>
  new Promise((resolve, reject) => {
    copy(src, dest, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });

async function genfiles(workspacePath, template) {
  const entry = path.join(__dirname, `templates/${template}`);
  await copyPromisify(`${entry}/**/*`, workspacePath);
}

module.exports = {
  genfiles,
};
