# Devbook Docusaurus Plugin
The Devbook Docusaurus plugin allows you to attach videos to code blocks in your [Docusaurus](https://docusaurus.io/) docs.

## Demo
Check the [demo](TODO) here.

## Use cases


## Usage
Install plugin
```sh
npm install @devbookhq/docusaurus-plugin
```

Add plugin to `docusaurus.config.js`:

```js
module.exports = {
  plugins: ['@devbookhq/docusaurus-plugin'],
}
```


### Add video to code snippet in your markdown files
    ```js video="https://..."
    function main() {

    }
    ```

## Development

1. `npm run watch` in the top directory
2. `npm run link ../` in the `example` directory
3. `npm run start` in the `example` directory
4. **(TEMPORARY)** When you change the plugin code you may need to restart the docusaurus server and delete the `example/.docusaurus` cache directory.

## TODO
- Fix development reloading
- Sort deps (versions, not-needed)
- Sort tsconfigs
