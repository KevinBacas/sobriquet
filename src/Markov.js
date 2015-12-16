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

let getNextCharacter = (transitionTable, currentCharacter, randomGeneratorFunction = Math.random) => {
  let transitionArray = transitionTable[currentCharacter] || ['$'];
  return transitionArray[(randomGeneratorFunction() * transitionArray.length) | 0];
};

let generateRandomWord = (transitionTable, firstCharacter, randomGeneratorFunction = Math.random) => {
  if(firstCharacter === '\0') {
    firstCharacter = getRandomStartingLetter(transitionTable, randomGeneratorFunction);
  }

  let res = firstCharacter;
  let nextChar = getNextCharacter(transitionTable, firstCharacter, randomGeneratorFunction);
  while (nextChar !== '$') {
    res += nextChar;
    nextChar = getNextCharacter(transitionTable, nextChar, randomGeneratorFunction);
  }
  return res;
};

let getRandomStartingLetter = (transitionTable, randomGeneratorFunction = Math.random) => {
  let someArray = [];
  for (let character in transitionTable) {
    if (transitionTable.hasOwnProperty(character)) {
      someArray.push(character);
    }
  }
  return someArray[(randomGeneratorFunction() * someArray.length) | 0];
}

export default { addWordIntoTransitionTable, updateTransitionTable, getNextCharacter, generateRandomWord };
