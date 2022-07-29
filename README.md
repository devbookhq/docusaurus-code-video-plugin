# Devbook Docusaurus Code Video Plugin
The Devbook Docusaurus code video plugin allows you to [add a video to a code block](#add-video-to-a-code-snippet) in your docs and [highlight code lines](#highlight-code-lines-as-the-video-plays) as the video plays.

## Supported video sources
- YouTube

Do you want more video sources? Please open an issue!

## Installation

Install the package:
```sh
npm install @devbookhq/docusaurus-code-video-plugin
```
or
```sh
yarn add @devbookhq/docusaurus-code-video-plugin
```

Add plugin to `docusaurus.config.js`:
```js
module.exports = {
  plugins: ['@devbookhq/docusaurus-code-video-plugin'],
}
```

## Usage with markdown (`.md`)
Add `youtubeID` attribute to a code block:

    ```js youtubeID=4HGNqFdaD34
    function main() {
      console.log(1);
      console.log(2);
    }
    ```


## Usage with [`CodeBlock`](https://docusaurus.io/docs/markdown-features/code-blocks) (`.mdx`, `.tsx`, `.jsx`)

Add the `youtubeID` prop to the component:

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

## Youtube video ID

Pass the YouTube video ID, not the full URL. The `youtubeID` is part of the regular Youtube video URL - `https://www.youtube.com/watch?v=[youtubeID]`, or the embed video URL - `https://www.youtube.com/embed/[youtubeID]`.

## How to highlighting code lines as the video plays
The plugin allows you to highlight different code lines (and ranges of code lines) at different timestamps.

Add the highlight attributes to the code block in **Markdown**:

    ```js youtubeID=4HGNqFdaD34 0:10-1:00=(1) 1:10-1:20=(1,2-4)
    function main() {
      console.log(1);
      console.log(2);
    }
    ```
    
Or if you are using the [`CodeBlock`](https://docusaurus.io/docs/markdown-features/code-blocks) component add the highlight attributes as props:

```jsx
import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!./myComponent';

<CodeBlock 
  language="jsx"
  youtubeID="4HGNqFdaD34" 
  {...{ ["0:10-1:00"]: "(1)", ["1:10-1:20"]: "(1,2-4)" }}  
>
  {MyComponentSource}
</CodeBlock>
```

Both examples above will highlight a code line number `1` from the time `0:10` until `1:00`. Then highlights code lines `1`, `2`, `3`, and `4` from the time `1:10` to the time `1:20`.

The code line highlights are in the format `videoStartTime-videoEndTime=(codeLinesRange)`. 
The start and the end timestamps are in the `H:M:S` format. Hours are optional (`M:S`).

> The highlight range format is the same as in the [Docusaurus code blocks]( https://docusaurus.io/docs/markdown-features/code-blocks#highlighting-with-metadata-string), just with the `()` parentheses instead of the `{}` parentheses.


## Styling
You can change the code lines' highlight style by customizing the `docusaurus-highlight-code-line` class - the same way you would change the [default Docusaurus highlight style](https://docusaurus.io/docs/markdown-features/code-blocks#line-highlighting).
