function generateHash(tokens) {
  var obj = {};
  var stageCount = 4;

  tokens.forEach(x => {
    if (x.type === "table") {
      --stageCount;
      let hash = "Stage_" + stageCount;
      obj[hash] = x.children;
    }
  });

  return obj;
}

module.exports = function(ast) {
  const children = ast.children;
  const hash = generateHash(children);
  console.log(hash);
};
