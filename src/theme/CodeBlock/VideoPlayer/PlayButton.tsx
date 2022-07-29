import React from 'react'

import styles from './styles.module.css'

import PlayIcon from './PlayIcon'
import CloseIconBig from './CloseIconBig'

export interface Props {
  onOpen: () => void
  onClose: () => void
  youtubeID: string
  isPlaying: boolean
}

function PlayButton({
  onOpen,
  youtubeID,
  onClose,
  isPlaying,
}: Props) {
  return (
    <div
      className={styles['play-wrapper']}
      onClick={isPlaying ? onClose : onOpen}
    >
      <img
        alt="Video thumbnail"
        src={`https://img.youtube.com/vi/${youtubeID}/mqdefault.jpg`}
        className={styles['play-thumbnail']}
      >
      </img>
      {isPlaying ? <CloseIconBig className={styles['close']} /> : <PlayIcon className={styles['play']} />}
    </div>
  )
}

export default PlayButton
