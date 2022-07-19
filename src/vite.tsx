import React from 'react'
import ReactDOM from 'react-dom'

import VideoPlayer from './theme/CodeBlock/VideoPlayer'

import './vite.css'

const url = "https://..."


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
    <div>
      <VideoPlayer url={url}>
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