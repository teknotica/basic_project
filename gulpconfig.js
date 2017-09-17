'use strict';

module.exports = {
    "less": {
        "src": "./assets/less/styles.less",
        "watch": "./assets/less/*.less",
        "dest": "./css/"
    },
    "scripts": {
        "src": [
            "./app/app.module.js",
            "./app/app.routes.js",
            "./app/**/*.js"
        ],
        "vendor": [
            "node_modules/angular/angular.js",
            "node_modules/angular-ui-router/release/angular-ui-router.js"
        ],
        "watch": "./app/**/*.js",
        "dest": "./js/"
    },
    "templates": {
        "src": [
            "./app/views/*.html"
        ]
    }
};
