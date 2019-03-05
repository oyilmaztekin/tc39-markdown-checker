const unified = require("unified");
const markdown = require("remark-parse");

module.exports = function(file) {
  return unified()
    .use(markdown)
    .parse(file);
};
