function generateTemplate(hash) {
  let template = {
    proposal: {
      link: null,
      text: null
    },
    author: null,
    champion: null,
    last_presented: {
      link: null,
      text: null
    }
  };
  if (hash[0].children.length === 5) {
    template["tests"] = null;
  }
  return template;
}

module.exports = function(hash) {
  const stage1Template = generateTemplate(
    hash["Stage_1"]
  );
  const stage2Template = generateTemplate(
    hash["Stage_2"]
  );
  const stage3Template = generateTemplate(
    hash["Stage_3"]
  );

  return [
    stage1Template,
    stage2Template,
    stage3Template
  ];
};
