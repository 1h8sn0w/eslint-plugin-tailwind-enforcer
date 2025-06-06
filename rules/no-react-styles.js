/**
 * @fileoverview Disallow the use of React StyleSheet or 'style' prop in favor of TailWind's 'className'.
 * @author Volodymyr https://github.com/1h8sn0w
 */

"use strict";

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Disallow StyleSheet and 'style' prop in favor of TailWind's 'className'",
            category: "Styling",
            recommended: false,
            // url: "https://github.com/your-github-username/eslint-plugin-tailwind-enforcer/blob/main/docs/rules/no-react-styles.md", // Optional: Link to specific rule docs
        },
        fixable: null,
        schema: [],
        messages: {
            noStyleSheetCreate: "Avoid StyleSheet.create(). Prefer TailWind's 'className'.",
            noStyleProp: "Avoid 'style' prop on JSX elements. Prefer TailWind's 'className'."
        },
    },
    create: function (context) {
        return {
            JSXAttribute(node) {
                if (node.name.type === "JSXIdentifier" && node.name.name === "style") {
                    context.report({node: node, messageId: "noStyleProp"});
                }
            },
            CallExpression(node) {
                if (node.callee.type === "MemberExpression") {
                    const calleeObject = node.callee.object;
                    const calleeProperty = node.callee.property;
                    if (
                        calleeObject.type === "Identifier" &&
                        calleeObject.name === "StyleSheet" &&
                        calleeProperty.type === "Identifier" &&
                        calleeProperty.name === "create"
                    ) {
                        context.report({node: node, messageId: "noStyleSheetCreate"});
                    }
                }
            },
        };
    },
};
