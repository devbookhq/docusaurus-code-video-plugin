import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

const positionKey = 'devbook_video_position'

interface Position {
  x: number
  y: number
}

function savePosition(position: Position) {
  const pos = JSON.stringify(position)
  localStorage.setItem(positionKey, pos)
}

function loadPosition(): Position | undefined {
  const pos = localStorage.getItem(positionKey)
  if (!pos) return
  return JSON.parse(pos)
}

let cachedPosition: Position | undefined

function usePosition() {
  const [position, setPosition] = useState<Position | undefined>(cachedPosition || { x: 0, y: 0 })

  useEffect(function loadDefaultPosition() {
    const defaultPosition = loadPosition()
    setPosition(defaultPosition)
    cachedPosition = defaultPosition
  }, [])

  const changePosition = useCallback((p: Position) => {
    cachedPosition = p
    setPosition(p)
    savePosition(p)
  }, [])

  return {
    changePosition,
    position,
  }
}

export default usePosition
