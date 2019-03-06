/**
 * first item of @param {hash[0]} - [tableRow]
 * @param {currentNode - tableRow} Object
 * @param {currentNode.children} array [4_item] - every item of the children are [tableCell]
 *
 * @summary every children of [tableCell] has one item consist of text except last_presented wrapped with html tab [<sub>Last_Presented</sub>]
 * focus on desctructing text
 *
 * @param {tableCell - currentNode.children[0].children[0].value} text [proposal]
 * @param {tableCell - currentNode.children[1].children[0].value} text [Author]
 * @param {tableCell - currentNode.children[2].children[0].value} text [Champion]
 *
 * @summary - last presented had splitted according to the spaces and html tags
 * @param {tableCell - currentNode.children[3].children} array [has_3_items]
 * @param {tableCell - currentNode.children[3].children[0].type} text [html]
 * @param {tableCell - currentNode.children[3].children[0].value} text [<sub>]
 * @param {tableCell - currentNode.children[3].children[1].type} text [text]
 * @param {tableCell - currentNode.children[3].children[1].value} text [Last_Presented]
 * @param {tableCell - currentNode.children[3].children[2].type} text [html]
 * @param {tableCell - currentNode.children[3].children[2].value} text [</sub>]
 */

/**
 * second item of @param {hash[1]} - [tableRow]
 * @param {currentNode - tableRow} Object
 * @param {currentNode.children} array [4_item] - every item of the children are [tableCell]
 *
 * @summary every children of [tableCell] has one item consist of text except last_presented wrapped with html tab [<sub>Last_Presented</sub>]
 *
 * @param {proposal}
 * if it is declared as an identifier(linkReference means codeBlock) pass and jump into the children
 * @param {tableCell - currentNode.children[0].children[0].identifier} text [export-from]
 * @param {tableCell - currentNode.children[0].children[0].label} text [export-from]
 * @param {tableCell - currentNode.children[0].children[0].referenceType} text [full]
 * @param {tableCell - currentNode.children[0].children[0].type} text [linkReference]
 *
 *
 * @param {tableCell - currentNode.children[0].children[0].children} array [has_2_items]
 * @param {tableCell - currentNode.children[0].children[0].children[0].type} text [inlineCode]
 *
 *
 * must be reunited into one text below [0-1] ----
 * @param {tableCell - currentNode.children[0].children[0].children[0].value} text ["export_v_from_"mod";"]
 * @param {tableCell - currentNode.children[0].children[0].children[1].value} text [statements]
 *
 *
 * @summary regular records
 * @param {currentNode.children[1].children[0].value - currentNode.children[2].children[0].value} text [Author_and_Chaimpion]
 *
 *
 * @param {Last_Presented}
 * @param {tableCell - currentNode.children[3].children} array [has_3_items]
 *
 * - type and value of the last presented wrapper
 * @param {tableCell - currentNode.children[3].children[0].type} text [html]
 * @param {tableCell - currentNode.children[3].children[0].value} text [<sub>]
 *
 * @summary - it creates an array for every words seperated between spaces
 * @param {tableCell - currentNode.children[3].children[1]} array [has_3_items]
 *
 *  --- last presented will be came from here
 * @param {tableCell - currentNode.children[3].children[1].children[0].value} text [July]
 * @param {tableCell - currentNode.children[3].children[1].children[1].value} text ["_"] empty text
 * @param {tableCell - currentNode.children[3].children[1].children[2].value} text [2017]
 * -----
 * end of the type and value of the last presented wrapper
 * @param {tableCell - currentNode.children[3].children[2].type} text [html]
 * @param {tableCell - currentNode.children[3].children[2].value} text [</sub>]
 */

function generateTable(hash, template) {
  let temp = Object.assign(template);
  const table = []; //table.push(tempItem)

  for (let i in hash) {
    let currentNode = hash[i];
    currentNode.children &&
      generateRow(currentNode);
  }
  return tree;
}

exports.generateTable = generateTable;
