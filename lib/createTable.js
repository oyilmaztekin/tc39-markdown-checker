/**
* @todo inspect below and decide
* @template [https://jsoneditoronline.org/?id=f1ce5803d66149d5bc86d0d53ffb40c0]
* 
*/

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

//if (hash[0].children.length === 5) {
//  template["tests"] = null;
//}

function generateTable(hash, stage, linkDefinitions) {
  const table = []; //table.push(tempItem)

  for (let i in hash) {
    let currentNode = hash[i];
    currentNode.children && generateRow(currentNode, {}, linkDefinitions);
  }
  return {};
}

function generateRow(currentNode, tmpl, linkDefinitions) {
  debugger;
  let temp;
  if (currentNode.type === "tableRow" && !!tmpl) {
    temp = Object.assign({}, template);
  } else {
    temp = tmpl;
  }

  let nodes;
  currentNode.children ? (nodes = currentNode.children) : null;

  if (nodes && isHeaderCell(nodes) === true) {
    return;
  }

  if (isLinkReference(currentNode) === true) {
    let label = currentNode.label;
    let link = linkDefinitions[label];
    temp["proposal"]["link"] = link;
    let counter = 0;

    currentNode.children.forEach(node => {
      if (counter >= 1) {
        temp["proposal"]["text"] += node.value;
        ++counter;
      } else {
        temp["proposal"]["text"] = node.value;
        ++counter;
      }
    });
    return;
  }

  nodes &&
    nodes.forEach(node => {
      if (node.children) {
        generateRow(node, temp, linkDefinitions);
      }
    });
}

function isHeaderCell(nodes) {
  if (
    nodes &&
    nodes[0] &&
    nodes[0].children &&
    nodes[0].children[0] &&
    nodes[0].children[0].value === "Proposal"
  ) {
    return true;
  }
  return false;
}

function isLinkReference(node) {
  if (node.type === "linkReference") {
    return true;
  }
  return false;
}

exports.generateTable = generateTable;
