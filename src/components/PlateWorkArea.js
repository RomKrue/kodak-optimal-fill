import styles from './PlateWorkArea.module.css'

import { useSelector } from 'react-redux'
import { plateScaleSelector } from '../store/slices/plateScaleSlice'

function PlateWorkArea() {
  const plateScale = useSelector(plateScaleSelector.getPlateScale)

  return (
    <div
      className={styles.PlateWorkArea}
      style={{
        left: `${36 * plateScale}px`,
        top: `${30 * plateScale}px`,
        width: `${1007 * plateScale}px`,
        height: `${734 * plateScale}px`,
      }}
    ></div>
  )
}

export default PlateWorkArea
