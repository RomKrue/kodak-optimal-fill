import styles from './UnusedPrintForm.module.css'

function UnusedPrintForm(props) {
  const { order, color, width, height, localScale } = props

  return (
    <div
      className={styles.UnusedPrintForm}
      style={{
        width: `${width * localScale}px`,
        height: `${height * localScale}px`,
      }}
    >{`${order} ${color} ${width}x${height}mm`}</div>
  )
}

export default UnusedPrintForm
