# sobriquet
sobriquet is a name generator build in Javascript based on Markov Chains.

## Installation NPM
`npm i -g sobriquet`

## Usage
```shell
# sobriquet swaggy some words -n 1
Random word(s) generated:
dsome
```

## Help documentation
```shell
sobriquet -h

Options

  --words string[]      List of words injected to the Markov chain
  -n, --number number   Number of words you want to generate       
  -s, --start string    The starting letter                        
  -h, --help            Display the usage of the CLI               
```

## Tests
Tests are run with [Jest](https://facebook.github.io/jest/) from Facebook

`npm test`
