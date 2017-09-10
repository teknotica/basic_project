'use strict';

module.exports = {
    "less": {
        "src": "./app/src/less/styles.less",
        "watch": "./app/src/less/*.less",
        "dest": "./css/"
    },
    "scripts": {
        "src": [
            "./app/src/scripts/main.js"
        ],
        "watch": "./app/src/scripts/*.js",
        "dest": "./js/"
    }
};
