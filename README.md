# Devbook Docusaurus Video Plugin
The Devbook Docusaurus video plugin allows you to [attach a video to a code block](#add-video-to-a-code-snippet) in your [Docusaurus](https://docusaurus.io/) docs.

In this code block you can then easily [highlight specific lines of code](#add-code-highlights-at-video-timestamps) when the relevant parts of the video are playing.

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
In **Markdown** add `youtubeID` attribute to the code block:

    ```js youtubeID=4HGNqFdaD34
    function main() {

    }
    ```

If you are using **MDX/JSX/TSX** [`CodeBlock`](https://docusaurus.io/docs/markdown-features/code-blocks) add the `youtubeID` prop:

```jsx
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!./myComponent';

<CodeBlock youtubeID="4HGNqFdaD34" language="jsx">{MyComponentSource}</CodeBlock>
```

> You need to pass just the YouTube video ID, not the whole URL. You can get the `youtubeID` from the normal video URL - `https://www.youtube.com/watch?v=[youtubeID]`, or from the embed URL - `https://www.youtube.com/embed/[youtubeID]`.

### Add code highlights at video timestamps
The video highlights are in the format `start-end=(range)`.
The start and the end timestamps are in the `H:M:S` format and the hours are optional (`M:S`).

In **Markdown** add highlight attributes to the code block:

    ```js youtubeID=4HGNqFdaD34 0:10-1:00=(1) 1:10-1:20=(1,2-3)
    function main() {

    }
    ```

If you are using **MDX/JSX/TSX** [`CodeBlock`](https://docusaurus.io/docs/markdown-features/code-blocks) add the highlight attributes as props:

```jsx
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!./myComponent';

<CodeBlock youtubeID="4HGNqFdaD34" "0:10-1:00"="(1)" "1:10-1:20"="(1,2-3)" language="jsx">{MyComponentSource}</CodeBlock>
```

> The highlight range format is the same as in the [Docusaurus code blocks]( https://docusaurus.io/docs/markdown-features/code-blocks#highlighting-with-metadata-string), just with the `()` parentheses instead of the `{}` parentheses.

> You can change the video line highlight style by customizing the `docusaurus-highlight-code-line` class - the same way you would change the [default Docusaurus highlight style](https://docusaurus.io/docs/markdown-features/code-blocks#line-highlighting).

## Supported video sources
- YouTube
