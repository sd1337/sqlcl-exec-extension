import { Lexer } from 'antlr4/Lexer';
import JavaScriptLexer from './PlSqlLexer.js';

export default class PlSqlLexerBase extends Lexer {
  constructor(input) {
    super(input);
  }
  IsNewlineAtPos(pos) {
    const la = this._input.LA(pos);
    return la == -1 || String.fromCharCode(la) == "\n";
  }
}

