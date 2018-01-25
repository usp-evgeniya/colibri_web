## Project build basing on gulp, webpack for js (live reload enabled)

### 1. Project description

This project is a web site of web developer and web designer.
!!! Important !!! Copy text from LIVE site for page Blog before update to live
!!! Important !!! Copy metatags Yandex, Google from LIVE site Main Page update to live

### 2. How to install

* Clone git repository
* Install node.js, npm 5, gulp-cli, webpack
* All packages required are described in package.json file
* npm i - use this command to download all packages required

### 3. Structure used in the project (you can change to yours as applicable)

#### dist - resulting files
* css
* js
* img

#### src - source files
* images
* scripts
* styles
* templates
* fonts

### 4. Content 

* Html, css, js code is represented just for an example
* Please feel free to use your own content

### 5. Available commands after installation
* npm install - install dependencies to your local folder
* gulp - run local server with life reload
* gulp build - build project to dist folder
* gulp clean - delete dist folder
* gulp styles - compile styles and minify css code, add auto-prefixes
* gulp scripts - check, compile, minify js code
* gulp templates - compile pug to html from src to dist
