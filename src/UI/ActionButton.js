import styles from './ActionButton.module.css'

function ActionButton(props) {
  const { title, action } = props

  return (
    <button
      className={styles.actionButton}
      title={title}
      onClick={() => action()}
    >
      {props.children}
    </button>
  )
}

export default ActionButton
