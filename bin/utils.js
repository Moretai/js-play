function desc(template) {
  switch (template) {
    case "es6+":
      return "new morden javascript playground";
    case "redux":
      return "react with redux counter example";
    case "saga":
      return "react with redux redux-saga counter example";
    default:
      return "new morden javascript playground";
  }
}

module.exports = {
  desc,
};
