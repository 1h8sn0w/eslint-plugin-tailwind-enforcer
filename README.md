# eslint-plugin-tailwind-enforcer

ESLint rules to enforce the use of TailWind's `className` prop for styling in React projects, discouraging the use of `StyleSheet.create()` and inline `style` props.

## 🚀 Installation

First, install the plugin from npm:

```bash
npm install --save-dev eslint-plugin-tailwind-enforcer
# or
yarn add --dev eslint-plugin-tailwind-enforcer
```

## ⚙️ Usage
Add `tailwind-enforcer` to the plugins section of your `.eslintrc.js` configuration file.

You can use the recommended configuration which enables the rule with a `warn` level:

```javascript
// .eslintrc.js
module.exports = {
  // ... your existing config
  plugins: [
    // ... other plugins
    "tailwind-enforcer", // Add the plugin here
  ],
  extends: [
    // ... other extends
    "plugin:tailwind-enforcer/recommended", // Use the recommended config
  ],
  rules: {
    // You can override the severity here if needed
    "tailwind-enforcer/no-react-styles": "error", // Example: make it an error instead of a warning
  },
  // ...
};
```

Or, enable the rule manually:

```javascript
// .eslintrc.js
module.exports = {
  // ... your existing config
  plugins: [
    // ... other plugins
    "tailwind-enforcer", // Add the plugin here
  ],
  rules: {
    "tailwind-enforcer/no-react-styles": "warn",
    // Or "error", depending on your preference
  },
  // ...
};
```

## 📝 Rules
`no-react-styles`
Disallows `StyleSheet.create()` and the `style` prop on JSX elements.

Message ID for StyleSheet.create(): noStyleSheetCreate
Message ID for style prop: noStyleProp

Incorrect example on ReactNative (using StyleSheet):
```javascript
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1 },
  text: { color: 'red' }
});

function MyComponent() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16 }}>Hello</Text>
    </View>
  );
}
```

Correct example (using NativeWind):

```javascript
import { View, Text } from 'react-native';

function MyComponent() {
  return (
    <View className="flex-1">
      <Text className="text-red-500 text-base">Hello</Text>
    </View>
  );
}
```

## 🤝 Contributing
Feel free to open issues or submit pull requests.
