import styles from './PrintForm.module.css'

function PrintForm(props) {
  const { formPosition, formSize, order, color } = props

  return (
    <div
      className={styles.printForm}
      style={{
        left: `${formPosition.x}px`,
        top: `${formPosition.y}px`,
        width: `${formSize.width}px`,
        height: `${formSize.height}px`,
      }}
      title={`${order} ${color}`}
    >
      <div
        className={styles.printFormLabel}
      >{`${order} ${color} ${formSize.width}x${formSize.height}мм`}</div>
    </div>
  )
}

export default PrintForm
