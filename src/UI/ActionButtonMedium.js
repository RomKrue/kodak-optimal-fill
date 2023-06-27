import styles from './ActionButtonMedium.module.css'

function ScaleButton(props) {
  const { title, action } = props

  return (
    <button
      className={styles.scaleButton}
      title={title}
      onClick={() => action()}
    >
      {props.children}
    </button>
  )
}

export default ScaleButton
