import UnusedPrintForm from './UnusedPrintForm'
import ScrollMarker from '../UI/ScrollMarker'

import { useSelector } from 'react-redux'

import styles from './UnusedPrintFormsPreview.module.css'

function UnusedPrintFormsPreview() {
  const unusedPrintForms = useSelector(
    (state) => state.printForms.unusedPrintForms
  )
  return (
    <div className={styles.UnusedPrintFormsPreview}>
      <div className={styles.scrollContainer}>
        {unusedPrintForms.map((formObj) => (
          <UnusedPrintForm key={formObj.id} {...formObj} />
        ))}
      </div>
      <ScrollMarker />
    </div>
  )
}

export default UnusedPrintFormsPreview
