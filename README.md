# GithubSearch

#### Github-search is a web app that enables a user to search for any Github user and any Github repository.
23/January/2019

### Author  **Kironji Kevin**

## Description

   Github-search is a simple tool that gives a user the ability to search and find any Github user or any Github repository through the help of Github API. The app calls for the specified User or Repository in the API and the API responds with the correct information. The entire application is built in Angular.js

## Prerequisites

  1.  You need to have git installed.You can install git using the following command in your terminal $ sudo apt install git-all -y
  2.  Download and install Node(a server-side runtime environment for javascript) at <https://nodejs.org/en/download/package-manager/> (Links to an external site.)
  3.  Download and install Angular(a platform that makes it easy to build applications) using the following command >$ npm install -g @angular/cli
  4.  Download and install watchman(an application that watches and records files as they change.) using the following commands
      1. $ cd ~
      2. $ git clone <https://github.com/facebook/watchman.git>
      3. $ cd watchman/
      4. $ git checkout v4.7.0
      5. $ sudo apt-get install -y autoconf automake build-essential python-dev
      6. $ ./autogen.sh
      7. $ ./configure
      8. $ make
      9. $ sudo make install
      10. $ watchman --version
      11. $ echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches  && echo 999999 | sudo tee -a  /proc/sys/fs/inotify/max_queued_events && echo 999999 | sudo tee  -a /proc/sys/fs/inotify/max_user_instances && watchman  shutdown-server
  5.  Install Typescript(Superset of JavaScript) and its transpiler with the following command $ npm install -g typescript && $ tsc -v -y

## Setup

  1.  Use this command $ git clone <https://github.com/Fahari/Github-search> This will clone the projects repository into a local folder on your device.
  2.  Open the files with an editor( preferably Atom. )
  3.  Study the code. learn from it. Improve on it.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Known Bugs

     As of the completion of this project 23/January/2019, NO bugs were present.

## Technologies Used

  1.  Angular.js
  2.  TypeScript
  3.  nodejs
  4.  watchman
  5.  Atom text editor

## Site

  You can access the live project at **[Github-search](https://fahari.github.io/Github-search/)**

## Support and contact details

  Have a question? Want to report a bug? feeling philanthropic? want to buy some beans? drop a suggestion or comment at karonjekevin67@gmail.com}

### License

  This project is under the **[MIT](https://github.com/Fahari/Github-search/blob/master/LICENSE)** license. Feel free to study and use the code.

  Copyright (c) 2019 **Kironji Kevin**
