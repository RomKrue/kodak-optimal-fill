import styles from './UnusedPrintForm.module.css'

function UnusedPrintForm(props) {
  const { id, order, color, width, height, space } = props
  return (
    <div
      className={styles.UnusedPrintForm}
      style={{
        minWidth: `${width}px`,
        minHeight: `${height}px`,
        scale: '0.5',
      }}
    >{`${order} ${color} ${width}x${height}mm`}</div>
  )
}

export default UnusedPrintForm
