import styles from './PrintForm.module.css'

import { useSelector } from 'react-redux'

import { plateScaleSelector } from '../store/slices/plateScaleSlice'

function PrintForm({ props }) {
  const { formPosition, formSize, order, color } = props

  const plateScale = useSelector(plateScaleSelector.getPlateScale)

  return (
    <div
      className={styles.printForm}
      style={{
        left: `${formPosition.x * plateScale}px`,
        top: `${formPosition.y * plateScale}px`,
        width: `${formSize.width * plateScale}px`,
        height: `${formSize.height * plateScale}px`,
      }}
      title={`${order} ${color}`}
    >
      <div
        className={styles.printFormLabel}
      >{`${order} ${color} ${formSize.width}x${formSize.height}mm`}</div>
    </div>
  )
}

export default PrintForm
