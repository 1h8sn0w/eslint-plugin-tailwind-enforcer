"use strict";

const noReactStylesRule = require("./rules/no-react-styles");

const recommendedConfig = require("./configs/recommended");

module.exports = {
    rules: {
        "no-react-styles": noReactStylesRule,
    },

    configs: {
        recommended: recommendedConfig,
    },
};
