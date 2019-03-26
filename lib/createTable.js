/**
 * @todo inspect below and decide
 * @template [https://jsoneditoronline.org/?id=f1ce5803d66149d5bc86d0d53ffb40c0]
 *
 */

let template = {
  proposal: {
    link: null,
    text: ""
  },
  author: "",
  champion: "",
  last_presented: {
    link: null,
    text: ""
  }
};

let counter = {
  countForCell: null
};

//if (hash[0].children.length === 5) {
//  template["tests"] = null;
//}

function generateTable(hash, stage, linkDefinitions) {
  for (let i in hash) {
    let currentNode = hash[i];
    currentNode.children && generateRow(currentNode, {}, linkDefinitions);
  }
}

function generateRow(currentNode, tmpl, linkDefinitions) {
  let temp;
  if (currentNode.type === "tableRow" && !!tmpl) {
    temp = Object.assign({}, template);
    counter.countForCell = 0;

    if (currentNode.length === 4) {
      temp.test = {
        link: null,
        test: null
      };
    }
  } else {
    temp = tmpl;
  }

  if (currentNode.type === "tableCell") {
    ++counter.countForCell;
  }

  let nodes;
  currentNode.children ? (nodes = currentNode.children) : null;

  if (nodes && isHeaderCell(nodes) === true) {
    return;
  }

  if (currentNode.type === "html") {
    return;
  }

  if (isLinkReference(currentNode) === true) {
    processLinkReference(currentNode, linkDefinitions, temp);
  }

  nodes &&
    nodes.forEach(node => {
      if (node.children) {
        generateRow(node, temp, linkDefinitions);
      } else {
        processSingleNode(node, temp);
      }
    });
    debugger;
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

function processSingleNode(node, temp) {
  if (node.type === "text" || node.type === "inlineCode") {
    if (counter.countForCell === 2) {
      temp.author = node.value;
      return;
    }
    if (counter.countForCell === 3) {
      temp.champion += " " + node.value;
    }

    if (counter.countForCell === 1) {
      temp.proposal.text += " " + node.value;
    }
  }
  return;
}

function processLinkReference(currentNode, linkDefinitions, temp) {
  let label = currentNode.label;
  let link = linkDefinitions[label];
  if (counter.countForCell === 1) {
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
  }

  if (counter.countForCell === 4) {
    temp["last_presented"]["link"] = link;
    let counter = 0;

    currentNode.children.forEach(node => {
      if (counter >= 1) {
        temp["last_presented"]["text"] += " " + node.value;
        ++counter;
      } else {
        temp["last_presented"]["text"] = node.value;
        ++counter;
      }
    });
  }

  return;
}

exports.generateTable = generateTable;
