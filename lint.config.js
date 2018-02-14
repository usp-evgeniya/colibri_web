const jshint = require('gulp-jshint');

const lintConfig = {
    "strict": false,
    "quotmark": false,
    "browser": true,
    "devel": true,
    "undef": false,
    "unused": true,
    "esversion": 6,
    "curly": true,
    "eqeqeq": true,
    "forin": true,
    "maxparams": 3,
    "node": true,
    "globals": {
      "$": true,
    }
};

module.exports = lintConfig;