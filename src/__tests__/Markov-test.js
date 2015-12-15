jest.dontMock('../Markov');

let database = { transitionTable: {} };

describe('Markov', function() {
  describe('updateTransitionTable', function() {
    it('Try to update database with empty array', function() {
      let Markov = require('../Markov');
      let res = Markov.updateTransitionTable(database, []);
      expect(res).toEqual(database);
    });

    it('Try to update database with ["abc"]', function() {
      let Markov = require('../Markov');
      let expected = {
        transitionTable: {
          'a': ['b'],
          'b': ['c'],
          'c': ['$']
        }
      };
      let res = Markov.updateTransitionTable(database, ["abc"]);
      expect(res).toEqual(expected);
    });

    it('Try to update database with ["abc", "cde"]', function() {
      let Markov = require('../Markov');
      let expected = {
        transitionTable: {
          'a': ['b'],
          'b': ['c'],
          'c': ['$', 'd'],
          'd': ['e'],
          'e': ['$']
        }
      };
      let res = Markov.updateTransitionTable(database, ["abc", "cde"]);
      expect(res).toEqual(expected);
    });
  });

  describe('getNextCharacter', function() {
    it('Should return \'$\'', function() {
      let Markov = require('../Markov');
      let expected = '$';
      let res = Markov.getNextCharacter({}, 'a');
      expect(res).toBe(expected);
    });
    it('Should return \'a\'', function() {
      let Markov = require('../Markov');
      let expected = 'a';
      let res = Markov.getNextCharacter({
        'a': ['a']
      }, 'a');
      expect(res).toBe(expected);
    });
  });
});
