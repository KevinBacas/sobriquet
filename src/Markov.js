export function addWordIntoTransitionTable(transitionTable, word) {
  let res = { ...transitionTable };
  for (let i = 0; i < word.length; i++) {
    const character = word[i];
    const nextChar = word[i + 1] || '$';
    const transitionArray = res[character] || [];
    transitionArray.push(nextChar);
    res = { ...res, [character]: transitionArray };
  }
  return res;
}

export function updateTransitionTable(database, words) {
  let res = { ...database };
  for (let i = 0; i < words.length; i++) {
    res = { ...res, transitionTable: addWordIntoTransitionTable(res.transitionTable, words[i]) };
  }
  return res;
}

export function getNextCharacter(
    transitionTable,
    currentCharacter,
    randomGeneratorFunction = Math.random) {
  const transitionArray = transitionTable[currentCharacter] || ['$'];
  return transitionArray[(randomGeneratorFunction() * transitionArray.length) | 0];
}

export function getRandomStartingLetter(transitionTable, randomGeneratorFunction = Math.random) {
  const someArray = [];
  transitionTable.forEach((character) => {
    if (transitionTable.hasOwnProperty(character)) {
      someArray.push(character);
    }
  });
  return someArray[(randomGeneratorFunction() * someArray.length) | 0];
}

export function generateRandomWord(
    transitionTable,
    firstCharacter,
    randomGeneratorFunction = Math.random) {
  let res = firstCharacter === '\0'
    ? getRandomStartingLetter(transitionTable, randomGeneratorFunction)
    : firstCharacter;
  let nextChar = getNextCharacter(transitionTable, firstCharacter, randomGeneratorFunction);
  while (nextChar !== '$') {
    res += nextChar;
    nextChar = getNextCharacter(transitionTable, nextChar, randomGeneratorFunction);
  }
  return res;
}
