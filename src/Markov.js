let addWordIntoTransitionTable = (transitionTable, word) => {
  let res = Object.assign({}, transitionTable);
  for (let i = 0; i < word.length; i++) {
    let character = word[i];
    let nextChar = word[i + 1] || '$';
    let transitionArray = res[character] || [];
    transitionArray.push(nextChar);
    res[character] = transitionArray;
  }
  return res;
};

let updateTransitionTable = (database, words) => {
  let res = Object.assign({}, database);
  for (let i = 0; i < words.length; i++) {
    res.transitionTable = addWordIntoTransitionTable(res.transitionTable, words[i]);
  }
  return res;
};

export default { updateTransitionTable };
