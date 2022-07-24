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
    ```js video=https://www.youtube.com/embed/...
    function main() {

    }
    ```


### Supported video sources
- YouTube (https://www.youtube.com/embed/[videoID])
