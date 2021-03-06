# Accessible Name Automation (Proof of Concept)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c2864d17-015e-4f1e-8fd6-8ba126b10e1c/deploy-status)](https://app.netlify.com/sites/accessible-name-automation-proof-of-concept/deploys)

This is an experiment based on set of changes to HTML and related standards called [Accessibility Object Model (AOM)](https://wicg.github.io/aom/explainer.html).

It mainly uses the experimental global method `window.getComputedAccessibleNode(node)`.

Such project tries to demonstrate that it is theoretically possible (in a certain way) to predict what the screen reader will say by focusing on semantic and non semantic elements with a bit of automated testing, thus reducing the need for manual testing.

[Check out the demo website!](https://accessible-name-automation-proof-of-concept.netlify.app/)

## Motivation

To get more details about this experiment and its principles, please check the file called **EXPLAINER.pdf** located at the root of the current repository.

## Details

This project includes, among others, the following:

- React
- Babel
- ESLint
- Styled Components
- Styled Reset
- Jest
- Jest Puppeteer
- Pa11y CI
- Webpack

Tests are declared into `./src/app/wrapper/app.accessiblename.spec.js`.

### Prerequisites

- Node v12.16.3
- NPM v6.14.8
- Git

## First steps

Clone locally the repository.

```
cd <path/to/your/desired/folder/>
git clone git@github.com:jonathanlinat/accessible-name-automation-proof-of-concept.git
```

Install the dependencies.

```
cd accessible-name-automation-proof-of-concept/
npm install
```

### Specific commands

Start a local demo.

```bash
npm run start:dev
```

Execute Accessible name tests (semantics) (`getComputedAccessibleNode()`).

```bash
npm run test:a11y:accessiblename
```

Execute Accessibility violation tests (`axe-core`).

```bash
npm run test:a11y:violations
```

Review generated test report.

```bash
npm run review:report
```

Compile the project.

```bash
npm run build
```
