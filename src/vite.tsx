import React, {
  useState,
} from 'react'
import ReactDOM from 'react-dom'

import VideoPlayer from './theme/CodeBlock/VideoPlayer'
import useVideoHighlight from './theme/CodeBlock/useVideoHighlight'

import './vite.css'

const youtubeID = '4HGNqFdaD34'

const props = {
  children: `console.log('xxx')
  console.log('xxx')
  // highlight-start
  console.log('xxx')
  console.log('xxx')
  console.log('xxx')

  console.log('xxx')`,
  ['0:1-0:4']: '(3)',
  ['0:4-1:20']: '(1,2)',
}

function MockCodeBlock() {
  const {
    metastring,
    handleTimeChange,
    children: highlightChildren,
  } = useVideoHighlight(props)
  const [isOpen, setIsOpen] = useState(false)

  const newProps = {
    children: isOpen ? highlightChildren?.toString().split('\n').map(l => <span>{l}</span>) : props.children.split('\n').map(l => <span>{l}</span>),
  }

  console.log('props', newProps.children)
  console.log('metastring', metastring)

  return (
    <VideoPlayer
      youtubeID={youtubeID}
      onTimeChange={handleTimeChange}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
    >
      <div className="dbk-mock-cb">
        {newProps.children}
      </div>
    </VideoPlayer>
  )
}

function App() {
  return (
    <div style={{ width: '80%', height: '100%', alignItems: 'center', justifyContent: 'center', fontFamily: 'mono' }}>
      <MockCodeBlock />
      <MockCodeBlock />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
