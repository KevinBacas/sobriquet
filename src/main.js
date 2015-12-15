import { updateTransitionTable } from './Markov.js';

let database = {
  transitionTable: []
};
let words = ['abc'];
database = updateTransitionTable(database, words);
