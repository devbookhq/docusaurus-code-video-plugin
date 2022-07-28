# Devbook Docusaurus Video Plugin
The Devbook Docusaurus plugin allows you to attach videos to code blocks in your [Docusaurus](https://docusaurus.io/) docs.

## Demo
Check the [demo](./example/) here.

## Usage
Install plugin:
```sh
npm install @devbookhq/docusaurus-video-plugin
```

Add plugin to `docusaurus.config.js`:
```js
module.exports = {
  plugins: ['@devbookhq/docusaurus-video-plugin'],
}
```

### Add video to a code snippet
In the **Markdown** add `youtubeID` attribute to the code block:

    ```js youtubeID=4HGNqFdaD34
    function main() {

    }
    ```

If you are using **MDX/JSX/TSX** `CodeBlock` add the `youtubeID` prop:

```jsx
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!./myComponent';

<CodeBlock youtubeID="4HGNqFdaD34" language="jsx">{MyComponentSource}</CodeBlock>
```

> You need to pass just the YouTube video ID, not the whole URL. You can get the ID from the normal URL - `https://www.youtube.com/watch?v=`**`[youtubeID]`**, or from the embed URL - `https://www.youtube.com/embed/`**`[youtubeID]`**.

### Add code highlights at set video timestamps
The highlight attribute is in the format `start-end=(range)`.
The start and the end timestamps are in the `H:M:S` format and the hours are optional (`M:S`).

In the **Markdown** add highlight attributes to the code block:

    ```js youtubeID=4HGNqFdaD34 0:10-1:00=(1) 1:10-1:20=(1,2-3)
    function main() {

    }
    ```

If you are using **MDX/JSX/TSX** `CodeBlock` add the attributes as props:

```jsx
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!./myComponent';

<CodeBlock youtubeID="4HGNqFdaD34" "0:10-1:00"="(1)" "1:10-1:20"="(1,2-3)" language="jsx">{MyComponentSource}</CodeBlock>
```

> The highlight range format is the same as in the Docusaurus code blocks - https://docusaurus.io/docs/markdown-features/code-blocks#highlighting-with-metadata-string, just with the `()` parentheses instead of the `{}` parentheses.

> You can change the video line highlight style by customizing the `docusaurus-highlight-code-line` class - the same way you would change the default Docusaurus highlight style.

## Supported video sources
- YouTube
