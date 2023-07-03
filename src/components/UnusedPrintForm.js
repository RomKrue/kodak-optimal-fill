import styles from './UnusedPrintForm.module.css'

function UnusedPrintForm(props) {
  const { id, order, color, width, height, space, localScale } = props
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
