import styles from './ScrollMarker.module.css'

function ScrollMarker() {
  return (
    <div className={styles.ScrollMarker}>
      <div className={styles.scrollMarker__dot}></div>
    </div>
  )
}

export default ScrollMarker
