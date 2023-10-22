const antlr4 = require('antlr4');
let PlSqlLexer;
let PlSqlParser;

try {
    PlSqlLexer = require('./PlSqlLexer').PlSqlLexer;
    PlSqlParser = require('./PlSqlParser').PlSqlParser;
} catch (e) {
    console.log(e);
    debugger
}

export default function getParser(input) {
    try{
    const chars = new antlr4.InputStream(input);

    // Create a lexer that feeds off of the character stream
    const lexer = new PlSqlLexer(chars);

    // Create a buffer of tokens pulled from the lexer
    const tokens = new antlr4.CommonTokenStream(lexer);

    // Create a parser that feeds off the token buffer
    const parser = new PlSqlParser(tokens);

    // // Parse the input
    // const tree = parser.select_statement();
    // console.log(tree.toStringTree(parser.ruleNames));
    return { parser, tokens };
    }catch(e){
        console.log(e);
        debugger
    }

}
// console.log(tree.toStringTree(parser.ruleNames));