# Devbook Docusaurus Plugin
The Devbook Docusaurus plugin allows you to attach videos to code blocks in your [Docusaurus](https://docusaurus.io/) docs.

## Demo
Check the [demo](TODO) here.

## Installation
Install plugin:
```sh
npm install @devbookhq/docusaurus-plugin
```

Add plugin to `docusaurus.config.js`:

```js
module.exports = {
  plugins: ['@devbookhq/docusaurus-plugin'],
}
```

## Code snippets' videos

### Add video to code snippet from Markdown
    ```js youtubeID=4HGNqFdaD34
    function main() {

    }
    ```

### Add code highlights at set timestamps
    ```js youtubeID=4HGNqFdaD34 1:10-1:20=(1,2-3)
    function main() {

    }
    ```

The highlight attribute is in the format `start-end=(range). The start and end timestamps are in the H:M:S format and the hours are optional (M:S).

> The highlight range format is the same as the Docusaurus highlight - https://docusaurus.io/docs/markdown-features/code-blocks#highlighting-with-metadata-string just with the `()`  instead of `{}`.

> You can change the video line highlight style by customizing the `docusaurus-highlight-code-line` class - the same way you would change the default Docusaurus highlight style.

### Supported video sources
- YouTube
  - `https://www.youtube.com/embed/[youtubeID]`
  - `https://www.youtube.com/watch?v=[youtubeID]`
