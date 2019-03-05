### CheckMarkdown
a script that constructs an AST based on the status table and generates a HTML table.   

#### modules
- **_readMarkdown_** : returns `string`
  - source file will be parsed as an AST
- **_parseToAST_** : returns `object`
  - an AST representation of the markdown 
- **_generateTemplate_** : returns `object`
  - generates an object based on the ast for creating HTML table  
