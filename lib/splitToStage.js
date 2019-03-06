module.exports = function(tokens) {
  var obj = {};
  var stageCount = 4;

  tokens.forEach(node => {
    if (node.type === "table") {
      --stageCount;
      let hash = "Stage_" + stageCount;
      obj[hash] = node.children;
    }
  });
  return obj;
};
