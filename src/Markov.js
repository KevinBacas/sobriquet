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

let getNextCharacter = (transitionTable, currentCharacter) => {
  let transitionArray = transitionTable[currentCharacter] || ['$'];
  return transitionArray[(Math.random() * transitionArray.length) | 0];
};

let generateRandomWord = (transitionTable, firstCharacter) => {
  let res = firstCharacter;
  let nextChar = getNextCharacter(transitionTable, firstCharacter);
  while (nextChar !== '$') {
    res += nextChar;
    nextChar = getNextCharacter(transitionTable, nextChar);
  }
  return res;
};

export default { addWordIntoTransitionTable, updateTransitionTable, getNextCharacter, generateRandomWord };
