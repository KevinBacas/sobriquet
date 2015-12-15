jest.dontMock('../Markov');

var database = { transitionTable: {} };

describe('Markov', function() {
  it('Try to update database with empty array', function() {
    var Markov = require('../Markov');
    var res = Markov.updateTransitionTable(database, []);
    expect(res).toEqual(database);
  });

  it('Try to update database with ["abc"]', function() {
    var Markov = require('../Markov');
    var expected = {
      transitionTable: {
        'a': ['b'],
        'b': ['c'],
        'c': ['$']
      }
    };
    var res = Markov.updateTransitionTable(database, ["abc"]);
    expect(res).toEqual(expected);
  });

  it('Try to update database with ["abc", "cde"]', function() {
    var Markov = require('../Markov');
    var expected = {
      transitionTable: {
        'a': ['b'],
        'b': ['c'],
        'c': ['$', 'd'],
        'd': ['e'],
        'e': ['$']
      }
    };
    var res = Markov.updateTransitionTable(database, ["abc", "cde"]);
    expect(res).toEqual(expected);
  });
});
