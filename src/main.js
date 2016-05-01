import commandLineArgs from 'command-line-args';
import { updateTransitionTable, generateRandomWord } from './Markov.js';

const cli = commandLineArgs([
  {
    name: 'words',
    type: String,
    multiple: true,
    defaultOption: true,
    defaultValue: [],
    description: 'List of words injected to the Markov chain',
  }, {
    name: 'number',
    alias: 'n', type:
    Number, defaultValue: 10,
    description: 'Number of words you want to generate',
  }, {
    name: 'start',
    alias: 's',
    type: String,
    defaultValue: '\0',
    description: 'The starting letter',
  }, {
    name: 'help',
    alias: 'h',
    type: Boolean,
    defaultValue: false,
    description: 'Display the usage of the CLI',
  },
]);

const options = cli.parse();

if (options.help) {
  console.log(cli.getUsage());
} else {
  let database = {
    transitionTable: [],
  };
  database = updateTransitionTable(database, options.words);
  console.log('Random word(s) generated:');
  for (let i = 0; i < options.number; ++i) {
    console.log(generateRandomWord(database.transitionTable, options.start));
  }
}
