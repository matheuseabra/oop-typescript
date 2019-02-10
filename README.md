# FineTune OOP Typescript

[![Build Status](https://travis-ci.org/wswebcreation/protractor-cucumber-typescript-boilerplate.svg?branch=master)](https://travis-ci.org/wswebcreation/protractor-cucumber-typescript-boilerplate)

Project built for the FineTune Selection, demonstrating how to structure OOP concepts with TypeScript, writing tests using Protactor as testing library along with CucumberJS and Gherkin language.

## Features
* working configuration out of the box for **CucumberJS 3.x**
    * for CucumberJS 1.x support see [here](https://github.com/wswebcreation/protractor-cucumber-typescript-boilerplate/tree/1.1.0) and the [CHANGELOG](./CHANGELOG.md#2.0.0) for the migration steps)
    * for CucumberJS 2.x support see [here](https://github.com/wswebcreation/protractor-cucumber-typescript-boilerplate/tree/2.x) and the [CHANGELOG](./CHANGELOG.md#3.0.0) for the migration steps)
* feature and step-files
* no need to compile TypeScript testfiles before running
* automatically making screenshots on failed steps (you can adjust the filename to whatever you want, it's just a simple setup)

It supports and provides:

* [protractor](https://github.com/angular/protractor) version 5.1.2
* [cucumberjs](https://github.com/cucumber/cucumber-js/) **NEW version 3.x.x support!**
    * for CucumberJS 1.x support see [here](https://github.com/wswebcreation/protractor-cucumber-typescript-boilerplate/tree/1.1.0)
    * for CucumberJS 2.x support see [here](https://github.com/wswebcreation/protractor-cucumber-typescript-boilerplate/tree/2.x)
* [typescript](https://github.com/Microsoft/TypeScript) version 2.5.x
* [protractor-multiple-cucumber-html-reporter-plugin](https://github.com/wswebcreation/protractor-multiple-cucumber-html-reporter-plugin) version ^1.1.0
* [protractor-flake](https://github.com/NickTomlin/protractor-flake) version ^3.0.0

## Quickstart

- `git clone` of this project
- go to the root of the project and execute `npm install`
- to get the tests running make sure you have a local `webdriver-manager`

Then there are 3 ways to run tests:

1. Run 1 or multiple featurefiles. This can be done with `npm run e2e -- --feature=example` or `npm run e2e -- --feature= example,playground`. Only provide the name of the featurefile(s) without the `.feature`
2. Run a specific tagged test(s) / featurefile(s). This can be done with `npm run e2e -- --tags=@tagName`. Please check the [docs](https://docs.cucumber.io/tag-expressions/) about how to use tags
3. Run all the available featurefiles. This can be done with `npm run e2e`

> **If you want to run tests and  nd after failure only rerun the failed ones, then use `npm run flake` to run it with `protractor-flake`**

## CucumberJS compiles on-the-fly
With the provided setup in the [`protractor.shared.conf.js`](/e2e-tests/config/protractor.shared.conf.js) you don't need to compile the TypeScript files before you run them. It will be done automatically for you with the `compiler` in the `cucumberOpts`.

```
cucumberOpts: {
	compiler: "ts:ts-node/register",
	require: [..],
	format: 'pretty',
	tags: ''
}
```

# Author

