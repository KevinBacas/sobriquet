jest.unmock('../Markov');

import { updateTransitionTable, getNextCharacter, generateRandomWord } from '../Markov';

const database = { transitionTable: {} };

describe('Markov', () => {
  describe('updateTransitionTable', () => {
    it('Try to update database with empty array', () => {
      const res = updateTransitionTable(database, []);
      expect(res).toEqual(database);
    });

    it('Try to update database with \'abc\'', () => {
      const expected = {
        transitionTable: {
          a: ['b'],
          b: ['c'],
          c: ['$'],
        },
      };
      const res = updateTransitionTable(database, ['abc']);
      expect(res).toEqual(expected);
    });

    it('Try to update database with \'abc\' and \'cde\'', () => {
      const expected = {
        transitionTable: {
          a: ['b'],
          b: ['c'],
          c: ['$', 'd'],
          d: ['e'],
          e: ['$'],
        },
      };
      const res = updateTransitionTable(database, ['abc', 'cde']);
      expect(res).toEqual(expected);
    });
  });

  describe('getNextCharacter', () => {
    const randomGeneratorFunction = () => 0;
    it('Should return \'$\'', () => {
      const expected = '$';
      const res = getNextCharacter({}, 'a', randomGeneratorFunction);
      expect(res).toBe(expected);
    });
    it('Should return \'a\'', () => {
      const expected = 'a';
      const res = getNextCharacter({
        a: ['a'],
      }, 'a', randomGeneratorFunction);
      expect(res).toBe(expected);
    });
    it('Should return \'b\'', () => {
      const expected = 'b';
      const res = getNextCharacter({
        a: ['b', 'a'],
      }, 'a', randomGeneratorFunction);
      expect(res).toBe(expected);
    });
  });

  describe('generateRandomWord', () => {
    const randomGeneratorFunction = () => 0;
    it('Should return \'a\'', () => {
      const expected = 'a';
      const res = generateRandomWord({}, 'a', randomGeneratorFunction);
      expect(res).toBe(expected);
    });
    it('Should return \'abc\'', () => {
      const expected = 'abc';
      const res = generateRandomWord({
        a: ['b'],
        b: ['c'],
        c: ['$'],
      }, 'a', randomGeneratorFunction);
      expect(res).toBe(expected);
    });
    it('Should return \'abc\'', () => {
      const expected = 'abc';
      const res = generateRandomWord({
        a: ['b', 'e'],
        b: ['c', 'f'],
        c: ['$', 'n'],
      }, 'a', randomGeneratorFunction);
      expect(res).toBe(expected);
    });
  });
});
