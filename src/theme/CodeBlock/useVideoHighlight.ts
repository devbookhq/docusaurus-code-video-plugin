import {
  useCallback,
  useMemo,
  useState,
} from 'react'
import { type Props } from '@theme-init/CodeBlock'

function convertHMSToSeconds(hms: string): number {
  const [s, m, h] = hms.split(':').reverse()

  let time = 0

  if (s) {
    const seconds = parseInt(s)
    if (!Number.isNaN(seconds)) {
      time += seconds
    }
  }

  if (m) {
    const minutes = parseInt(m)
    if (!Number.isNaN(minutes)) {
      time += minutes * 60
    }
  }

  if (h) {
    const hours = parseInt(h)
    if (!Number.isNaN(hours)) {
      time += hours * 60 * 60
    }
  }

  return time
}

function notEmpty<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

function getHighlight(time: number, timeMap: HighlightInterval[]) {
  const interval = timeMap.find(i => i.start <= time && i.end > time)
  return interval?.highlightString
}

const intervalHighlightPropRegex = /^(.+:.+)-(.+:.+)$/

function getTimeMap(props: Props): HighlightInterval[] {
  return Object
    .entries(props)
    .map(([key, value]) => {
      const found = key.match(intervalHighlightPropRegex)

      if (!found) return

      const startString = found[1]
      const endString = found[2]

      if (!startString || !endString) return

      return {
        start: convertHMSToSeconds(startString),
        end: convertHMSToSeconds(endString),
        highlightString: value.replace('(', '{').replace(')', '}'),
      }
    })
    .filter(notEmpty)
}

interface HighlightInterval {
  start: number
  end: number
  highlightString: string
  hasHighlight?: boolean
}

function useVideoHighlight(props: Props) {
  const [highlightString, setHighlightString] = useState<string>()

  const timeMap = useMemo<HighlightInterval[] | undefined>(() => {
    const newTimeMap = getTimeMap(props)
    return newTimeMap.length > 0 ? newTimeMap : undefined
  }, [props])

  const handleTimeChange = useCallback((time: number) => {
    if (!timeMap) return

    const highlight = getHighlight(time, timeMap)
    setHighlightString(highlight)
  }, [timeMap])

  const metastring = highlightString
    ? `${highlightString} ${props.metastring}`
    : props.metastring

  return useMemo(() => ({
    metastring,
    handleTimeChange: timeMap ? handleTimeChange : undefined,
    hasHighlight: !!timeMap
  }), [
    metastring,
    handleTimeChange,
    timeMap,
  ])
}

export default useVideoHighlight
