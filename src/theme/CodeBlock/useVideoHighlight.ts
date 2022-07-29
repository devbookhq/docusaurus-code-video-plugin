import React, {
  ReactNode,
  useCallback,
  useMemo,
  isValidElement,
  useState,
} from 'react'
import { type Props } from '@theme-init/CodeBlock'
import rangeParser from 'parse-numeric-range'

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

const magicComments = [
  'highlight-next-line',
  'highlight-start',
  'highlight-end',
]

function checkForSubstrings(str: string, sub: string[]) {
  return sub.some(s => str.indexOf(s) >= 0)
}

function clearCodeChildren(children: ReactNode): { children: ReactNode, removedLineNumbers: number[] } {
  if (React.Children.toArray(children).some((el) => isValidElement(el))) {
    return {
      children,
      removedLineNumbers: [],
    }
  }

  // The children is now guaranteed to be one/more plain strings
  const code = Array.isArray(children) ? children.join('') : (children as string)

  const lines = code.split(/\r?\n/)

  const magicCommentLines = lines
    .map(l => checkForSubstrings(l, magicComments))
    .map((v, i) => v ? i : undefined)
    .filter(notEmpty)

  const replacedCode = lines
    .filter((_, i) => !magicCommentLines.includes(i))
    .join('\n')

  return {
    children: replacedCode,
    removedLineNumbers: magicCommentLines,
  }
}

function removeLinesFromTimeMap(lines: number[], timeMap: HighlightInterval[]): HighlightInterval[] {
  return timeMap
    .map(i => ({
      ...i,
      highlightString: `{${rangeParser(i.highlightString)
        .map(codeLine => {
          const shift = lines.filter(l => l < codeLine).length
          return codeLine - shift
        })
        .filter(c => c > 0)
        .join(',')
        }}`,
    }))
}

function useVideoHighlight(props: Props) {
  const [highlightString, setHighlightString] = useState<string>()
  const [children, setChildren] = useState<ReactNode>(props.children)

  const timeMap = useMemo<HighlightInterval[] | undefined>(() => {
    const newTimeMap = getTimeMap(props)

    if (newTimeMap.length === 0) return undefined



    const {
      children: newChildren,
      removedLineNumbers,
    } = clearCodeChildren(props.children)

    console.log('removed', removedLineNumbers)

    const timeMapWithoutMagicComments = removeLinesFromTimeMap(removedLineNumbers, newTimeMap)

    console.log('maps', newTimeMap, timeMapWithoutMagicComments)

    // if (timeMapWithoutMagicComments.length === 0) return undefined

    setChildren(newChildren)
    // return timeMapWithoutMagicComments

    return newTimeMap
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
    children,
  }), [
    metastring,
    handleTimeChange,
    timeMap,
    children,
  ])
}

export default useVideoHighlight
