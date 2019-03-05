const fs = require("fs");

const Readme = function() {
  //change the file path before the implemententation
  return fs.readFileSync(
    __dirname + "/../README.md",
    "utf-8"
  );
};

exports.markdownFile = Readme;
