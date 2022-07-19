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


### Add video to code snippet in Docusaurus MD
    ```js video="https://..."
    function main() {

    }
    ```


## TODO
- Fix development reloading
- Sort deps (versions, not-needed)
- Sort tsconfigs