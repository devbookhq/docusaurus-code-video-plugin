import styles from './styles.module.css'

export interface Props {
  onOpen: () => void
  buttonText?: string
}

function PlayButton({
  onOpen,
  buttonText = 'Play',
}: Props) {
  return (
    <button
      onClick={onOpen}
      className={styles['dbk-video-button']}
    >
      {buttonText}
    </button>
  )
}

export default PlayButton
