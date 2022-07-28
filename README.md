# Devbook Docusaurus Video Plugin
The Devbook Docusaurus Video Plugin allows you to [add a video to a code block](#add-video-to-a-code-snippet) in your docs and [highlight code lines](#highlight-code-lines-as-the-video-plays) as the video plays.

## Supported video sources
- YouTube

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

<CodeBlock 
  youtubeID="4HGNqFdaD34" 
  language="jsx"
>
  {MyComponentSource}
</CodeBlock>
```

> You need to pass just the YouTube video ID, not the whole URL. You can get the `youtubeID` from the regular Youtube video URL - `https://www.youtube.com/watch?v=[youtubeID]`, or from the embed URL - `https://www.youtube.com/embed/[youtubeID]`.

### Highlight code lines as the video plays
The code line highlights are in the format `videoStartTime-videoEndTime=(codeLinesRange)`.
The start and the end timestamps are in the `H:M:S` format. Hours are optional (`M:S`).

Add the highlight attributes to the code block in **Markdown**:

    ```js youtubeID=4HGNqFdaD34 0:10-1:00=(1) 1:10-1:20=(1,2-4)
    function main() {


    }
    ```

The example above will highlight a code line number `1` from the time `0:10` until `1:00`. Then highlights code lines `1`, `2`, `3`, and `4` from the time `1:10` to the time `1:20`.

If you are using **MDX/JSX/TSX** [`CodeBlock`](https://docusaurus.io/docs/markdown-features/code-blocks) add the highlight attributes as props:

```jsx
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!./myComponent';

<CodeBlock 
  youtubeID="4HGNqFdaD34" 
  "0:10-1:00"="(1)" 
  "1:10-1:20"="(1,2-4)" 
  language="jsx"
>
  {MyComponentSource}
</CodeBlock>
```

> The highlight range format is the same as in the [Docusaurus code blocks]( https://docusaurus.io/docs/markdown-features/code-blocks#highlighting-with-metadata-string), just with the `()` parentheses instead of the `{}` parentheses.

#### How to style highlighted code lines
You can change the code lines' highlight style by customizing the `docusaurus-highlight-code-line` class - the same way you would change the [default Docusaurus highlight style](https://docusaurus.io/docs/markdown-features/code-blocks#line-highlighting).
