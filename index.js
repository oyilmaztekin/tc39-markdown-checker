const readMarkdown = require("./lib/readMarkdown");
const parseToAST = require("./lib/parseToAst");
const splitToStage = require("./lib/splitToStage");
const generateTemplate = require("./lib/generateTemplate");
const generateTable = require("./lib/createTable")
  .generateTable;

const readme = readMarkdown.markdownFile();
const parsedFile = parseToAST(readme);
const hash = splitToStage(parsedFile.children);
const template = generateTemplate(hash); //returns tuple
const tableStage1 = generateTable(
  hash["Stage_1"],
  template[0]
);

// create a json file based on the constructed object
