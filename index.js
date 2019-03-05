const readMarkdown = require("./lib/readMarkdown");
const parseToAST = require("./lib/parseToAst");
const generateTemplate = require("./lib/generateTemplate");

try {
  const readme = readMarkdown.markdownFile();
  const parsedFile = parseToAST(readme);
  generateTemplate(parsedFile);
} catch (error) {
  throw Error(error);
}
