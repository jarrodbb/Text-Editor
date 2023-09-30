# Text-Editor

## Description

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-100%25-yellow.svg)
![express](https://img.shields.io/badge/express-v4.17.1-orange)
![eslint](https://img.shields.io/badge/eslint-v7.12.1-lightgrey)
![nodemon](https://img.shields.io/badge/nodemon-3.0.1-black)

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [license](#license)

## Installation

### Running the application

In the terminal run `npm run start` in the root of the application. This will start the application in the backend and serve the client. 

<img width="1462" alt="Screenshot 2023-09-30 at 3 14 02 pm" src="https://github.com/jarrodbb/Text-Editor/assets/132813348/cac849a0-7768-449f-b7c5-a2437830c84d">

Webpack will create a dist folder that has bundled the JavaScript files. 

<img width="1450" alt="Screenshot 2023-09-30 at 3 14 26 pm" src="https://github.com/jarrodbb/Text-Editor/assets/132813348/cc6b43e6-c3fa-4530-9773-bc0f8c4364f6">

```install.bundle.js```

<img width="1457" alt="Screenshot 2023-09-30 at 3 15 08 pm" src="https://github.com/jarrodbb/Text-Editor/assets/132813348/e3b3ff8c-9cb4-40ea-a028-4aa3a20c1209">

```main.bundle.js```

<img width="1546" alt="Screenshot 2023-09-30 at 3 15 33 pm" src="https://github.com/jarrodbb/Text-Editor/assets/132813348/6fe20e4d-2c8c-4cc5-93e5-8236e02267d9">

Webpack will also generate a HTML file, service worker and a manifest file

```index.html```

<img width="1525" alt="Screenshot 2023-09-30 at 3 20 24 pm" src="https://github.com/jarrodbb/Text-Editor/assets/132813348/652f9fd3-8220-46ec-90be-05cf346c5ca9">

```manifest.json```

<img width="1523" alt="Screenshot 2023-09-30 at 3 20 38 pm" src="https://github.com/jarrodbb/Text-Editor/assets/132813348/58772726-95b6-493e-9eed-f119d8b8dcf5">

```service worker```

<img width="1539" alt="Screenshot 2023-09-30 at 3 20 59 pm" src="https://github.com/jarrodbb/Text-Editor/assets/132813348/4f0011ea-14a4-480c-ad96-da5a7b7d52d9">

By including Babel in the ```webpack.config.js``` next-gen JavaScript can be utilised in the application


### Deployed Link

This Text-Editor is a deployed application. Please see below the link to view the site. Have fun

[its-a-text-editor](https://its-a-text-editor-6c1743480971.herokuapp.com/)

### Code

[Client](https://github.com/jarrodbb/Text-Editor/tree/main/client)

[Server](https://github.com/jarrodbb/Text-Editor/tree/main/server)

### Note:

.gitignore added to ignore node_modules and dist folder

### Technologies Used

<p><a href="https://nodejs.org/">Node.js</a></p>
<p><a href="https://www.npmjs.com/">NPM</a></p>
<p><a href="https://www.npmjs.com/package/express">Express.js</a></p>
<p><a href="https://nodemon.io/">nodemon</a></p>
<p><a href="https://webpack.js.org/">webpack</a></p>

## Usage

[its-a-text-editor](https://its-a-text-editor-6c1743480971.herokuapp.com/)

### Add text to the text editor

<img width="1727" alt="Screenshot 2023-09-30 at 3 26 29 pm" src="https://github.com/jarrodbb/Text-Editor/assets/132813348/6a51ce3f-3abb-474e-9c90-6511e2ec5083">

### Application's `manifest.json` file

### Application's registered service worker

### Application's IndexedDB Storage

### Offline capability

## License

Please refer to the licence in the repo.
