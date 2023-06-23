import styles from './ActionButtonMedium.module.css'

function ScaleButton(props) {
  const { title, action } = props

  return (
    <button
      title={title}
      className={styles.scaleButton}
      onClick={() => action()}
    >
      {props.children}
    </button>
  )
}

export default ScaleButton
