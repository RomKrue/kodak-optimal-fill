import styles from './ActionButton.module.css'

import { useSelector } from 'react-redux'
import { plateScaleSelector } from '../store/slices/plateScaleSlice'

function ActionButton(props) {
  const plateScale = useSelector(plateScaleSelector.getPlateScale)
  return <button className={styles.actionButton}>{props.children}</button>
}

export default ActionButton
