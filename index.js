const readMarkdown = require("./lib/readMarkdown");
const parseToAST = require("./lib/parseToAst");
const collectLinkDefinitions = require("./lib/collectLinkDefinitions");
const splitToStage = require("./lib/splitToStage");
const generateTable = require("./lib/createTable")
  .generateTable;

const readme = readMarkdown.markdownFile();
const parsedFile = parseToAST(readme);
const collectedLinkDefinitions = collectLinkDefinitions(parsedFile);
const hash = splitToStage(parsedFile.children);
const tableStage1 = generateTable(
  hash["Stage_1"],
  "stage1",
  collectedLinkDefinitions
);

// create a json file based on the constructed object
