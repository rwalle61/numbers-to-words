# Numbers to words

A command-line interface (CLI) tool that takes an integer from 0 to 100,000 and converts it into grammatically correct
English words.

## Pre-requisties

### Install Node.js

I tested with Node 14, 16 & 19. On Mac, `brew install node` <https://formulae.brew.sh/formula/node>

### Install package manager

I've used `yarn` but `npm` would work too.

`npm` comes with node.

Install yarn: `npm install --global yarn` <https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable>

### Install dependencies

`yarn` / `npm install`

### Build executable

`yarn build` / `npm build`

## Run

### Success

```bash
> ./bin/numbers-to-words 52
fifty-two
```

### Error

```bash
> ./bin/numbers-to-words -1
...
Error: Arg must be between 0-100000
...
```

## Tests

`yarn test`

## Notes & Decisions

- behaviour

  - matches spec exactly (see `e2e-test.ts` and acceptance tests in `numberToWords.test.ts`)
  - standard streams: stdout and stderr
  - exit codes: 0 on success, 1 on failure

- structure

  - flow: `index.ts` -> controller -> parse input -> invoke use case -> output
  - Separated business logic (use case) from CLI-specific details (controller and adapters) so they can change independently (e.g. can run this on the cloud instead of CLI without changing core logic)
  - minimal abstraction (besides separating concerns) so easy to extend
  - no external libraries (e.g. [`commander`](https://www.npmjs.com/package/commander)) because simpler
  - I used `node` and `TypeScript` because it works well for this problem, I'm familiar with them, and TypeScript provides good compile-time type-safety

- testing
  - developed using TDD (see commits)
  - full unit tests (put next to source files so easy to edit together)
  - e2e tests used as they run quickly and are the only full integration tests
