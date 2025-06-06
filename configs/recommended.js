/**
 * @fileoverview Recommended configuration for enforcing TailWind's className usage.
 * @author Volodymyr https://github.com/1h8sn0w
 */

"use strict";

module.exports = {
    plugins: ["tailwind-enforcer"],
    rules: {
        "tailwind-enforcer/no-react-styles": "warn",
    },
};
