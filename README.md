# Selenium Jest Assessment

This repo contains the Selenium assessment task given to me for a job interview.

|     |               |
| --- | ------------- |
| by  | Vincent Dirks |
| on  | 2-Nov-2023    |

## Task

Identify at least one test scenario from the website https://magento.softwaretestingboard.com/ and automate it. Please use Selenium (No framework is necessary if you don't have one, you can use just raw Selenium. Please keep your code simple and concise.

## Prerequisites

On my Win 11 (Home) laptop I had already 

- VS Code installed
- Node.js installed
- GitHub account created (if needed)
- Repo cloned in VS Code 

## Installation & Execution
_Just adding a placeholder for documenting how to install and execute this test suite. It should probably only need_
1. Install IDE/Editor (eg. VS Code)
1. Clone this repo
1. Download dependencies with `npm install`
1. Execute the tests with `npm test`

## Steps Performed

I performed the following steps, generally updating this README.md, and submitting commits for each step or so. The terminal commands were executed using GitBash. No Git branching strategy was used (as yet), just committing straight to main for now.

1. Updated Node.js to LTS v20.9.0 from https://nodejs.org/en
1. Initialized a new node project `npm init -y`
1. Setup Jest `npm install --save-dev jest`
1. Created sum function, and a basic Jest test for it. (Using ES6 module syntax)
1. Installed Selenium and Chrome Driver
```
npm install selenium-webdriver
npm install chromedriver
```
6. Created a simple first selenium script based on https://github.com/SeleniumHQ/seleniumhq.github.io/blob/trunk/examples/javascript/test/getting_started/firstScript.spec.js Making modifications for ES6 modules and using jest `before*` and `after*` hooks
1. Created a test for loading the home page at https://magento.softwaretestingboard.com/ 