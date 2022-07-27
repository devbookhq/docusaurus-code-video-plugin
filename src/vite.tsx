import React from 'react'
import ReactDOM from 'react-dom'

import VideoPlayer from './theme/CodeBlock/VideoPlayer'

import './vite.css'

const youtubeID = '4HGNqFdaD34'

function MockCodeBlock() {
  return (
    <div className="dbk-mock-cb">
      <span>
        console.log('xxx')
      </span>
      <span>
        console.log('xxx')
      </span>
      <span>
        console.log('xxx')
      </span>
    </div>
  )
}

function App() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <VideoPlayer youtubeID={youtubeID}>
        <MockCodeBlock />
      </VideoPlayer>
      <VideoPlayer youtubeID={youtubeID}>
        <MockCodeBlock />
      </VideoPlayer>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
