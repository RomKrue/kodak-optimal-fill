import UnusedPrintForm from './UnusedPrintForm'
import { useSelector } from 'react-redux'

import styles from './UnusedPrintFormsPreview.module.css'

function UnusedPrintFormsPreview() {
  const unusedPrintForms = useSelector(
    (state) => state.printForms.unusedPrintForms
  )

  return (
    <div className={styles.UnusedPrintFormsPreview}>
      {unusedPrintForms.map((formObj) => (
        <UnusedPrintForm key={formObj.id} {...formObj} />
      ))}
    </div>
  )
}

export default UnusedPrintFormsPreview
