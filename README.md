# Devbook Docusaurus Plugin
Devbook plugin for Docusaurus

## Development

1. `npm run watch` in the top directory
2. `npm run link ../` in the `example` directory
3. `npm run start` in the `example` directory
4. **(TEMPORARY)** When you change the plugin code you may need to restart the docusaurus server and delete the `example/.docusaurus` cache directory.

## Usage
Install plugin
```sh
npm install @devbookhq/docusaurus-plugin
```

Add plugin to `docusaurus.config.js`:

```js
module.exports = {
  ...
  plugins: ['@devbookhq/docusaurus-plugin'],
  ...
}
```

## TODO
- Fix development reloading
- Check if customizable language support (solidity) works
- Sort deps (versions, not-needed, eslint)
- Sort tsconfigs
- Sort withWrapper CodeBlock syntax and custom types
- Finish github release workflow (secrets)
