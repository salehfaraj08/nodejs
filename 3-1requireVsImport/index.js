/* differences between import and require
import:
  Lexical will be sorted to the top of the current file.
  Only can be called in the beginning.
  Able to load partially(saving a lot of memories).
    require:
Non - lexical; stay wherever it called.
  Can be called anytime.
  Not able to load partially. */
import name, { func1, func2, func3 } from './module.js'
import fs from 'fs';
console.log(name);
console.log(func1());
console.log(func2());
console.log(func3());
