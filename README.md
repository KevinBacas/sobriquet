# sobriquet
sobriquet is a name generator built in Javascript and based on Markov Chains.

[![Circle CI](https://circleci.com/gh/KevinBacas/sobriquet.svg?style=svg)](https://circleci.com/gh/KevinBacas/sobriquet)
[![npm version](https://badge.fury.io/js/sobriquet.svg)](https://badge.fury.io/js/sobriquet)
[![codecov](https://codecov.io/gh/KevinBacas/sobriquet/branch/master/graph/badge.svg)](https://codecov.io/gh/KevinBacas/sobriquet)

## Installation NPM
`npm i -g sobriquet`

## Usage
```shell
$ sobriquet swaggy some words -n 1
Random word(s) generated:
dsome
```

## Help documentation
```shell
$ sobriquet -h

Options

  --words string[]      List of words injected to the Markov chain
  -n, --number number   Number of words you want to generate       
  -s, --start string    The starting letter                        
  -h, --help            Display the usage of the CLI               
```

## Tests
Tests are run with [Jest](https://facebook.github.io/jest/) from Facebook

`npm test`
